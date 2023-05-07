import React from 'react';
import { ProjectCard, SectionContainer } from '~/components';
import { PortfolioSectionHeader, PortfolioBulletPoint, PortfolioEntryHeader, PortfolioBulletPointsWrapper } from '~/components/portfolio';

export default function Education() {
  return (
    <SectionContainer className="flex flex-col justify-center px-2 lg:px-0">
      <PortfolioSectionHeader sectionTitle="Education" />
      <NTU />
    </SectionContainer>
  );
}

function NTU() {
  return (
    <div>
      <PortfolioEntryHeader
        entity="Nanyang Technological University"
        location="Singapore"
        positionType="Bachelor of Computer Science"
        positionPeriod="August 2020 - June 2024"
      />
      <NTUEducationDetails />
      <NTUCourseworkProject />
    </div>
  );
}

function NTUEducationDetails() {
  return (
    <PortfolioBulletPointsWrapper>
      <PortfolioBulletPoint title="Expected Honour - ">
        <span>
          Highest Distinction <strong className="font-normal italic text-gray-900 dark:text-gray-50">{'(CGPA > 4.5/5.0)'}</strong>
        </span>
      </PortfolioBulletPoint>

      <PortfolioBulletPoint title="Specialization - ">
        <span>
          High Performance Computing<strong className="font-normal"> and </strong>Artificial Intelligence
        </span>
      </PortfolioBulletPoint>

      <PortfolioBulletPoint title="Specialization - ">
        <span>Distributed Computing Network | Decentralized Finance | Computer Vision</span>
      </PortfolioBulletPoint>
    </PortfolioBulletPointsWrapper>
  );
}

function NTUCourseworkProject() {
  return (
    <div className="">
      <div className="w-full text-center font-semibold text-base sm:text-xl md:text-2xl">Coursework Project</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pt-4 md:pt-8 mx-auto">
        <ProjectCard
          href="https://onestop-e-cycle.vercel.app/"
          openGraphHref="/projects/e-cycle.jpg"
          header="E-CYCLE"
          desc="Web application to assist with E-waste recycling in Singapore. APIs are provided by SG goverment at data.gov.sg"
        />
        <ProjectCard
          href="https://github.com/PhiDung-hub/basic_CV_techniques"
          openGraphHref="/projects/computer_vision.png"
          header="Basic Computer Vision"
          desc="A compilation of old school computer vision techniques, with detailed implementation and walkthrough examples."
        />
        <ProjectCard
          href="https://github.com/PhiDung-hub/TF_Probabilty"
          openGraphHref="/projects/probabilitic_ML.jpg"
          header="Tensorflow Probibility"
          desc="An exploration of Tensorflow Probability library by constructing various probabilistic models for computer vision tasks."
        />
      </div>
    </div>
  );
}
