import React from 'react';
import {
  PortfolioSectionHeader,
  PortfolioEntryHeader,
  PortfolioBulletPoint,
  PortfolioBulletPointsWrapper,
} from '~/components/portfolio';
import { SectionContainer } from '~/components';

export default function Experience() {
  return (
    <SectionContainer className="flex flex-col justify-center px-2 lg:px-0">
      <PortfolioSectionHeader sectionTitle="Experience" />
      <ViewBase />
      <NewWorldPharma />
      <BlockchainAtNTU />
    </SectionContainer>
  );
}

function ViewBase() {
  return (
    <>
      <PortfolioEntryHeader
        entity="ViewBase Pte Ltd"
        entityHref="https://linkedin.com/company/viewbaseanalytics"
        location="Singapore"
        positionType="Software Engineer Intern"
        positionPeriod="November 2021 - December 2022"
      />

      <PortfolioBulletPointsWrapper>
        <PortfolioBulletPoint title="Fullstack Development - ">
          <span>Develop a discussion forum with reddit-like features.</span>
        </PortfolioBulletPoint>
        <PortfolioBulletPoint title="Token Design - ">
          <span>
            Designed a time-based rebasing token system for platform subscriptions, enabling efficient microtransactions
            and transferable subscriptions.
          </span>
        </PortfolioBulletPoint>
        <PortfolioBulletPoint title="Frontend development - ">
          <span>Help develop a landing page featuring 3D interactive models utilizing BabylonJS.</span>
        </PortfolioBulletPoint>
        <PortfolioBulletPoint title="Smart Contract Engineering - ">
          <span>
            Optimized ERC721 contracts by modifying IERC721Enumerable, resulting in a 70% reduction in gas usage without
            compromising functionalities.
          </span>
        </PortfolioBulletPoint>
      </PortfolioBulletPointsWrapper>
    </>
  );
}

function NewWorldPharma() {
  return (
    <>
      <PortfolioEntryHeader
        entity="New World Pharma JSC"
        entityHref="https://newworldpharma.com.vn"
        location="Vietnam"
        positionType="Contract Developer"
        positionPeriod="October 2022 - February 2023"
      />

      <PortfolioBulletPointsWrapper>
        <PortfolioBulletPoint title="Web Development - ">
          <span>
            Created a fully functional website for New World Pharma JSC, a pharmaceutical company based in Vietnam.{' '}
          </span>
        </PortfolioBulletPoint>
        <PortfolioBulletPoint title="Web Content Management System - ">
          <span>
            Successfully integrated Tina CMS, a content management system that facilitates efficient management of media
            and content.
          </span>
        </PortfolioBulletPoint>
      </PortfolioBulletPointsWrapper>
    </>
  );
}

function BlockchainAtNTU() {
  return (
    <>
      <PortfolioEntryHeader
        entity="Blockchain@NTU"
        entityHref="https://linkedin.com"
        location="Vietnam"
        positionType="Development Director"
        positionPeriod="August 2022 - Now"
      />

      <PortfolioBulletPointsWrapper>
        <PortfolioBulletPoint title="Experience Sharing - ">
          <span>
            Facilitated events and development workshops to onboard enthusiastic blockchain developers on their journey.
          </span>
        </PortfolioBulletPoint>
        <PortfolioBulletPoint title="Blockchain Development - ">
          <span>
            Create a smart contract CLI tool that effectively demonstrated the principles of EVM blockchains and
            decentralized applications.
          </span>
        </PortfolioBulletPoint>
      </PortfolioBulletPointsWrapper>
    </>
  );
}
