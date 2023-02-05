import NextImage from 'next/image';
import NextLink from 'next/link';
import { SectionContainer } from '~/components';

export default function Hero() {
  return (
    <SectionContainer>
      <NextImage width={300} height={300} src="/photo.png" alt="Personal Photo" className="mx-auto rounded-full py-4" />

      <div className={`font-mono text-xl md:text-2xl animate-text-bounce p-5 w-full h-full text-center`}>
        <p>
          <span>
            Hi, I&apos;m Phil<strong className="text-[1.75rem] ml-1">👋</strong>. I{' '}
          </span>
          <span className="text-blue-700 dark:text-blue-300 font-bold animate-text-change animate-text-pulse"></span>
          <span> technology related to </span>
        </p>
        <div className="text-rose-400 font-bold"> Blockchain & Distributed Systems | Numerical Simulation | Artifical Intelligence.</div>
      </div>

      <div className="w-full mx-auto text-center md:flex flex-row p-12 sm:px-0 justify-center">
        {cards.map(({ title, desc, href, style }, index) => (
          <NextLink key={`tech-skill-${index}`} href={href} passHref>
            <div
              className={`shadow-sm mb-4 md:m-0 py-2 px-4 md:px-8 mx-auto md:mx-8 xl:mx-12 rounded-lg w-[15rem] md:w-[20rem] md:h-[10rem]
              font-semibold bg-blue-500 dark:bg-zinc-500 text-gray-50
              md:hover:scale-[1.02] group ${style}`}
            >
              <div className="text-amber-200 dark:text-amber-500 font-bold text-xl md:text-2xl group-hover:animate-text-pulse">{title}</div>
              <div className="pt-2 text-sm md:text-base">{desc}</div>
            </div>
          </NextLink>
        ))}
      </div>
    </SectionContainer>
  );
}

const cards = [
  {
    title: 'Projects',
    desc: 'Places where I test new technologies and play with my knowledge. Keep building!',
    href: '/projects',
    style: 'shadow-orange-500',
  },
  {
    title: 'Blog',
    desc: 'Places where I jot down what I learn (opinionatedly). Thoughts are occasionally found.',
    href: '/blog',
    style: 'shadow-orange-500',
  },
];
