import React from 'react';
import NextImage from 'next/image';
import { SectionContainer } from '~/components';

export default function Education() {
  return (
    <SectionContainer className="flex flex-col justify-center px-2 lg:px-0">
      <div className="pb-8 xl:pb-12">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Education</p>
      </div>
      <div className="flex items-stretch text-base sm:text-xl md:text-2xl font-bold border-b-2 border-gray-500 pb-2 text-blue-500 dark:text-blue-200">
        <a href="https://www.ntu.edu.sg/" rel="noopener noreferrer" target="_blank" className="flex-grow hover:animate-text-pulse">
          Nanyang Technological University
        </a>
        <p className="italic">Singapore</p>
      </div>

      <div className="flex items-stretch text-base sm:text-xl md:text-2xl font-bold py-2">
        <p className="flex-grow">Bachelor of Computer Science</p>
        <p className="italic">August 2020 - June 2024</p>
      </div>

      <EducationDetails />

      <CourseworkProject />
    </SectionContainer>
  );
}

function EducationDetails() {
  return (
    <div className="text-base sm:text-xl md:text-2xl py-2">
      <p className="py-1">
        <span className="font-semibold">Expetected Honour - </span>
        <span className="font-medium text-rose-500 dark:text-rose-400">
          Highest Distinction <strong className="font-normal italic text-gray-900 dark:text-gray-50">{'(CGPA > 4.5/5.0)'}</strong>
        </span>
      </p>
      <p className="py-1">
        <span className="font-semibold">Specialization - </span>
        <span className="font-medium text-rose-500 dark:text-rose-400">High Performance Computing + Artificial Intelligence</span>
      </p>
      <p className="py-1">
        <span className="font-semibold">Field of interest - </span>
        <span className="font-medium text-rose-500 dark:text-rose-400">
          Distributed Computing Network | Decentralized Finance | Computer Vision
        </span>
      </p>
    </div>
  );
}

function CourseworkProject() {
  return (
    <div className="md:pt-8">
      <div className="w-full text-center font-semibold text-base sm:text-xl md:text-2xl">Coursework Project</div>

      <div className="grid grid-cols-1 md:grid-cols-2 pt-4 md:pt-12 max-w-[800px] mx-auto">
        <a
          href="https://onestop-e-cycle.vercel.app/"
          rel="noreferrer external"
          target="_blank"
          className="my-4 md:my-0 mx-auto w-[280px] md:w-[350px] bg-blue-200 dark:bg-gray-500 rounded-md hover:scale-[1.02] duration-300"
        >
          <NextImage src="/projects/e-cycle.jpg" alt="E-cycle Open Graph Image" width={350} height={200} className="rounded-t-md" />
          <p className="py-4 px-4">
            <strong className="text-lg">{'E-CYCLE: '}</strong>
            <span>Web application to assist with E-waste recycling in Singapore. Data APIs provided by data.gov.sg</span>
          </p>
        </a>

        <a
          href="https://github.com/PhiDung-hub/basic_CV_techniques"
          rel="noreferrer external"
          target="_blank"
          className="my-4 md:my-0 mx-auto w-[280px] md:w-[350px] bg-blue-200 dark:bg-gray-500 rounded-md hover:scale-[1.02] duration-300"
        >
          <NextImage src="/projects/computer_vision.png" alt="E-cycle Open Graph Image" width={350} height={200} className="rounded-t-md" />
          <p className="py-4 px-4">
            <strong className="text-lg">{'Basic Computer Vision: '}</strong>
            <span> A compilation of old school computer vision techniques,  with detailed walkthrough examples.</span>
          </p>
        </a>
      </div>
    </div>
  );
}
