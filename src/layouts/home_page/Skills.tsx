import React from 'react';
import { Image, SectionContainer } from '~/components';

export default function Skills() {
  return (
    <SectionContainer className="flex flex-col justify-center">
      <div className="pb-4 xl:pb-8">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Tech Stack</p>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ src, title, href, style }, index) => (
          <a
            href={href}
            rel="noreferrer nooppener"
            target="_blank"
            className={`w-full shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style} bg-blue-100 dark:bg-blue-300 dark:text-violet-700`}
            key={`tech-skill-${index}`}
          >
            <Image
              src={src}
              alt="alt-text"
              className="mx-auto py-2 md:py-8 h-[6rem] md:h-[10rem]"
              width={100}
              height={100}
            />
            <p className="mt-4 font-bold mx-auto w-full">{title}</p>
          </a>
        ))}
      </div>
    </SectionContainer>
  );
}

const techs = [
  {
    src: '/techs/foundry.png',
    title: 'Foundry',
    href: 'https://book.getfoundry.sh/',
    style: 'shadow-orange-500',
  },
  {
    src: '/techs/hardhat.png',
    title: 'Hardhat',
    href: 'https://hardhat.org/docs',
    style: 'shadow-yellow-400',
  },
  {
    src: '/techs/tokio.png',
    title: 'Tokio',
    href: 'https://github.com/tokio-rs/tokio',
    style: 'shadow-yellow-500',
  },
  {
    src: '/techs/polars.svg',
    title: 'Pola-rs',
    href: 'https://www.pola.rs/',
    style: 'shadow-blue-700',
  },
  {
    src: '/techs/nestjs.svg',
    title: 'NestJS (Express)',
    href: 'https://docs.nestjs.com/',
    style: 'shadow-red-500',
  },
  {
    src: '/techs/nextjs.png',
    title: 'Next JS (React)',
    href: 'https://nextjs.org/',
    style: 'shadow-lime-500',
  },
  {
    src: '/techs/threejs.png',
    title: 'Three JS',
    href: 'https://nextjs.org/',
    style: 'shadow-gray-500',
  },
  {
    src: '/techs/tensorflow.png',
    title: 'Tensorflow (Core + TFP)',
    href: 'https://www.tensorflow.org/about',
    style: 'shadow-amber-500',
  },
];
