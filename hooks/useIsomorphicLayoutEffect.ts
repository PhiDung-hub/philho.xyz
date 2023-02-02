import { useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// Fix error for useLayoutEffect in Sever Side Rendering framework like NextJS: https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
export default useIsomorphicLayoutEffect;
