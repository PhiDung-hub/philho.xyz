import React from 'react';
import NextImage from 'next/image';
import { SectionContainer } from '~/components';

const Experience = () => {
  return (
    <SectionContainer className="flex flex-col justify-center">
      <div className="pb-4 xl:pb-8">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Technology</p>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ src, title, href, style }, index) => (
          <a
            href={href}
            rel="noreferrer nooppener"
            target="_blank"
            key={`tech-skill-${index}`}
            className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} bg-blue-100 dark:bg-blue-300 dark:text-violet-700`}
          >
            <NextImage src={src} alt="alt-text" className="mx-auto py-2 md:py-8 h-[6rem] md:h-[10rem]" width={100} height={100} />
            <div className="mt-4 font-bold">{title}</div>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Experience;

const techs = [
  {
    src: '/techs/foundry.png',
    title: 'Foundry',
    href: 'https://github.com/foundry-rs/foundry',
    style: 'shadow-orange-500',
  },
  {
    src: '/techs/tokio.png',
    title: 'Tokio',
    href: 'https://github.com/tokio-rs/tokio',
    style: 'shadow-yellow-500',
  },
  {
    src: '/techs/diesel.png',
    title: 'Diesel ORM',
    href: 'https://github.com/diesel-rs/diesel',
    style: 'shadow-red-500',
  },
  {
    src: '/techs/prisma.png',
    title: 'Prisma ORM',
    href: 'https://github.com/prisma/prisma',
    style: 'shadow-blue-500',
  },
  {
    src: '/techs/pandas.png',
    title: 'Pandas',
    href: 'https://pandas.pydata.org',
    style: 'shadow-blue-500',
  },
  {
    src: '/techs/react.png',
    title: 'React',
    href: 'https://reactjs.org/',
    style: 'shadow-blue-500',
  },
  {
    src: '/techs/nextjs.png',
    title: 'Next JS',
    href: 'https://nextjs.org/',
    style: 'shadow-gray-500',
  },
  {
    src: '/techs/threejs.png',
    title: 'Three JS',
    href: 'https://nextjs.org/',
    style: 'shadow-gray-500',
  },
];
