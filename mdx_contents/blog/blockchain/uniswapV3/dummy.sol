/// @inheritdoc IUniswapV3PoolActions
function swap(
  address recipient,
  bool zeroForOne,
  int256 amountSpecified,
  uint160 sqrtPriceLimitX96,
  bytes calldata data
) external override noDelegateCall returns (int256 amount0, int256 amount1) {
  require(amountSpecified != 0, 'AS');

  Slot0 memory slot0Start = slot0;

  require(slot0Start.unlocked, 'LOK');
  require(
    zeroForOne
      ? sqrtPriceLimitX96 < slot0Start.sqrtPriceX96 && sqrtPriceLimitX96 > TickMath.MIN_SQRT_RATIO
      : sqrtPriceLimitX96 > slot0Start.sqrtPriceX96 && sqrtPriceLimitX96 < TickMath.MAX_SQRT_RATIO,
    'SPL'
  );

  slot0.unlocked = false;

  SwapCache memory cache = SwapCache({
    liquidityStart: liquidity,
    blockTimestamp: _blockTimestamp(),
    feeProtocol: zeroForOne ? (slot0Start.feeProtocol % 16) : (slot0Start.feeProtocol >> 4),
    secondsPerLiquidityCumulativeX128: 0,
    tickCumulative: 0,
    computedLatestObservation: false
  });

  bool exactInput = amountSpecified > 0;

  SwapState memory state = SwapState({
    amountSpecifiedRemaining: amountSpecified,
    amountCalculated: 0,
    sqrtPriceX96: slot0Start.sqrtPriceX96,
    tick: slot0Start.tick,
    feeGrowthGlobalX128: zeroForOne ? feeGrowthGlobal0X128 : feeGrowthGlobal1X128,
    protocolFee: 0,
    liquidity: cache.liquidityStart
  });

  // continue swapping as long as we haven't used the entire input/output and haven't reached the price limit
  while (state.amountSpecifiedRemaining != 0 && state.sqrtPriceX96 != sqrtPriceLimitX96) {
    StepComputations memory step;

    step.sqrtPriceStartX96 = state.sqrtPriceX96;

    (step.tickNext, step.initialized) = tickBitmap.nextInitializedTickWithinOneWord(
      state.tick,
      tickSpacing,
      zeroForOne
    );

    // ensure that we do not overshoot the min/max tick, as the tick bitmap is not aware of these bounds
    if (step.tickNext < TickMath.MIN_TICK) {
      step.tickNext = TickMath.MIN_TICK;
    } else if (step.tickNext > TickMath.MAX_TICK) {
      step.tickNext = TickMath.MAX_TICK;
    }

    // get the price for the next tick
    step.sqrtPriceNextX96 = TickMath.getSqrtRatioAtTick(step.tickNext);

    // compute values to swap to the target tick, price limit, or point where input/output amount is exhausted
    (state.sqrtPriceX96, step.amountIn, step.amountOut, step.feeAmount) = SwapMath.computeSwapStep(
      state.sqrtPriceX96,
      (zeroForOne ? step.sqrtPriceNextX96 < sqrtPriceLimitX96 : step.sqrtPriceNextX96 > sqrtPriceLimitX96)
        ? sqrtPriceLimitX96
        : step.sqrtPriceNextX96,
      state.liquidity,
      state.amountSpecifiedRemaining,
      fee
    );

    if (exactInput) {
      state.amountSpecifiedRemaining -= (step.amountIn + step.feeAmount).toInt256();
      state.amountCalculated = state.amountCalculated.sub(step.amountOut.toInt256());
    } else {
      state.amountSpecifiedRemaining += step.amountOut.toInt256();
      state.amountCalculated = state.amountCalculated.add((step.amountIn + step.feeAmount).toInt256());
    }

    // if the protocol fee is on, calculate how much is owed, decrement feeAmount, and increment protocolFee
    if (cache.feeProtocol > 0) {
      uint256 delta = step.feeAmount / cache.feeProtocol;
      step.feeAmount -= delta;
      state.protocolFee += uint128(delta);
    }

    // update global fee tracker
    if (state.liquidity > 0)
      state.feeGrowthGlobalX128 += FullMath.mulDiv(step.feeAmount, FixedPoint128.Q128, state.liquidity);

    // shift tick if we reached the next price
    if (state.sqrtPriceX96 == step.sqrtPriceNextX96) {
      // if the tick is initialized, run the tick transition
      if (step.initialized) {
        // check for the placeholder value, which we replace with the actual value the first time the swap
        // crosses an initialized tick
        if (!cache.computedLatestObservation) {
          (cache.tickCumulative, cache.secondsPerLiquidityCumulativeX128) = observations.observeSingle(
            cache.blockTimestamp,
            0,
            slot0Start.tick,
            slot0Start.observationIndex,
            cache.liquidityStart,
            slot0Start.observationCardinality
          );
          cache.computedLatestObservation = true;
        }
        int128 liquidityNet = ticks.cross(
          step.tickNext,
          (zeroForOne ? state.feeGrowthGlobalX128 : feeGrowthGlobal0X128),
          (zeroForOne ? feeGrowthGlobal1X128 : state.feeGrowthGlobalX128),
          cache.secondsPerLiquidityCumulativeX128,
          cache.tickCumulative,
          cache.blockTimestamp
        );
        // if we're moving leftward, we interpret liquidityNet as the opposite sign
        // safe because liquidityNet cannot be type(int128).min
        if (zeroForOne) liquidityNet = -liquidityNet;

        state.liquidity = LiquidityMath.addDelta(state.liquidity, liquidityNet);
      }

      state.tick = zeroForOne ? step.tickNext - 1 : step.tickNext;
    } else if (state.sqrtPriceX96 != step.sqrtPriceStartX96) {
      // recompute unless we're on a lower tick boundary (i.e. already transitioned ticks), and haven't moved
      state.tick = TickMath.getTickAtSqrtRatio(state.sqrtPriceX96);
    }
  }

  // update tick and write an oracle entry if the tick change
  if (state.tick != slot0Start.tick) {
    (uint16 observationIndex, uint16 observationCardinality) = observations.write(
      slot0Start.observationIndex,
      cache.blockTimestamp,
      slot0Start.tick,
      cache.liquidityStart,
      slot0Start.observationCardinality,
      slot0Start.observationCardinalityNext
    );
    (slot0.sqrtPriceX96, slot0.tick, slot0.observationIndex, slot0.observationCardinality) = (
      state.sqrtPriceX96,
      state.tick,
      observationIndex,
      observationCardinality
    );
  } else {
    // otherwise just update the price
    slot0.sqrtPriceX96 = state.sqrtPriceX96;
  }

  // update liquidity if it changed
  if (cache.liquidityStart != state.liquidity) liquidity = state.liquidity;

  // update fee growth global and, if necessary, protocol fees
  // overflow is acceptable, protocol has to withdraw before it hits type(uint128).max fees
  if (zeroForOne) {
    feeGrowthGlobal0X128 = state.feeGrowthGlobalX128;
    if (state.protocolFee > 0) protocolFees.token0 += state.protocolFee;
  } else {
    feeGrowthGlobal1X128 = state.feeGrowthGlobalX128;
    if (state.protocolFee > 0) protocolFees.token1 += state.protocolFee;
  }

  (amount0, amount1) = zeroForOne == exactInput
    ? (amountSpecified - state.amountSpecifiedRemaining, state.amountCalculated)
    : (state.amountCalculated, amountSpecified - state.amountSpecifiedRemaining);

  // do the transfers and collect payment
  if (zeroForOne) {
    if (amount1 < 0) TransferHelper.safeTransfer(token1, recipient, uint256(-amount1));

    uint256 balance0Before = balance0();
    IUniswapV3SwapCallback(msg.sender).uniswapV3SwapCallback(amount0, amount1, data);
    require(balance0Before.add(uint256(amount0)) <= balance0(), 'IIA');
  } else {
    if (amount0 < 0) TransferHelper.safeTransfer(token0, recipient, uint256(-amount0));

    uint256 balance1Before = balance1();
    IUniswapV3SwapCallback(msg.sender).uniswapV3SwapCallback(amount0, amount1, data);
    require(balance1Before.add(uint256(amount1)) <= balance1(), 'IIA');
  }

  emit Swap(msg.sender, recipient, amount0, amount1, state.sqrtPriceX96, state.liquidity, state.tick);
  slot0.unlocked = true;
}

/// @inheritdoc IUniswapV3PoolActions
function flash(
  address recipient,
  uint256 amount0,
  uint256 amount1,
  bytes calldata data
) external override lock noDelegateCall {
  uint128 _liquidity = liquidity;
  require(_liquidity > 0, 'L');

  uint256 fee0 = FullMath.mulDivRoundingUp(amount0, fee, 1e6);
  uint256 fee1 = FullMath.mulDivRoundingUp(amount1, fee, 1e6);
  uint256 balance0Before = balance0();
  uint256 balance1Before = balance1();

  if (amount0 > 0) TransferHelper.safeTransfer(token0, recipient, amount0);
  if (amount1 > 0) TransferHelper.safeTransfer(token1, recipient, amount1);

  IUniswapV3FlashCallback(msg.sender).uniswapV3FlashCallback(fee0, fee1, data);

  uint256 balance0After = balance0();
  uint256 balance1After = balance1();

  require(balance0Before.add(fee0) <= balance0After, 'F0');
  require(balance1Before.add(fee1) <= balance1After, 'F1');

  // sub is safe because we know balanceAfter is gt balanceBefore by at least fee
  uint256 paid0 = balance0After - balance0Before;
  uint256 paid1 = balance1After - balance1Before;

  if (paid0 > 0) {
    uint8 feeProtocol0 = slot0.feeProtocol % 16;
    uint256 fees0 = feeProtocol0 == 0 ? 0 : paid0 / feeProtocol0;
    if (uint128(fees0) > 0) protocolFees.token0 += uint128(fees0);
    feeGrowthGlobal0X128 += FullMath.mulDiv(paid0 - fees0, FixedPoint128.Q128, _liquidity);
  }
  if (paid1 > 0) {
    uint8 feeProtocol1 = slot0.feeProtocol >> 4;
    uint256 fees1 = feeProtocol1 == 0 ? 0 : paid1 / feeProtocol1;
    if (uint128(fees1) > 0) protocolFees.token1 += uint128(fees1);
    feeGrowthGlobal1X128 += FullMath.mulDiv(paid1 - fees1, FixedPoint128.Q128, _liquidity);
  }

  emit Flash(msg.sender, recipient, amount0, amount1, paid0, paid1);
}
