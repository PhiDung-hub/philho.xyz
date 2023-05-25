import React from 'react';
import { PortfolioSectionHeader, PortfolioBulletPoint, PortfolioBulletPointsWrapper } from '~/components/portfolio';
import { SectionContainer } from '~/components';

export default function Achievements() {
  return (
    <SectionContainer className="flex flex-col justify-center px-2 lg:px-0 !pt-0">
      <PortfolioSectionHeader sectionTitle="Achievements" />
      <PortfolioBulletPointsWrapper>
        <PortfolioBulletPoint title="ASEAN Undergraduate Scholarships - ">
          Awarded by Singapore&apos; Ministry of Education.
        </PortfolioBulletPoint>

        <PortfolioBulletPoint title="13th IOAA Silver Medalist - ">
          13th International Olympiads on Astronomy and Astrophysics was hosted in Keszthely, Hungary. More info at{' '}
          <a
            href="https://ioaa2019.hu"
            rel="noreferrer noopener"
            target="_blank"
            className="text-blue-700 dark:text-blue-200 hover:animate-text-pulse"
          >
            https://ioaa2019.hu
          </a>
        </PortfolioBulletPoint>

        <PortfolioBulletPoint title="12th IOAA Silver Medalist - ">
          12th International Olympiads on Astronomy and Astrophysics was hosted in Beijing, China (website currently
          unavailable). More info at{' '}
          <a
            href="https://www.ioaastrophysics.org"
            rel="noreferrer noopener"
            target="_blank"
            className="text-blue-700 dark:text-blue-200 hover:animate-text-pulse"
          >
            https://www.ioaastrophysics.org
          </a>
        </PortfolioBulletPoint>

        <PortfolioBulletPoint title="4th IOM Silver Medalist in Physics - ">
          4th International Olympiad of Metropolises was hosted in Moscow, Russia (website currently sanctioned). More
          info in{' '}
          <a
            href="https://en.vietnamplus.vn/vietnam-wins-big-at-4th-international-olympiad-of-metropolises/160090.vnp"
            rel="noreferrer noopener"
            target="_blank"
            className="text-blue-700 dark:text-blue-200 hover:animate-text-pulse"
          >
            the press release
          </a>
        </PortfolioBulletPoint>
      </PortfolioBulletPointsWrapper>
    </SectionContainer>
  );
}
