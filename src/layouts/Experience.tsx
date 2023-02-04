import React from 'react';
import NextImage from 'next/image';
import { SectionContainer } from '~/components';

const Experience = () => {
  return (
    <SectionContainer className="flex flex-col justify-center h-screen">
      <div className="pb-4 xl:pb-8">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
      </div>
    </SectionContainer>
  );
};

export default Experience;
