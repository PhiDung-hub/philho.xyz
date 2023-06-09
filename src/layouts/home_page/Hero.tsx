import NextImage from 'next/image';
import NextLink from 'next/link';
import { SectionContainer } from '~/components';
import './Hero.css';

export default function Hero() {
  return (
    <SectionContainer className="pt-24">
      <NextImage
        priority
        width={300}
        height={300}
        src="/personal_photo.jpg"
        alt="Personal Photo"
        className="mx-auto rounded-full py-4"
      />

      <div className={`font-mono text-xl md:text-2xl animate-text-bounce p-5 w-full h-full text-center`}>
        <div>
          <p>
            <strong className="text-[1.75rem] mr-1">👋</strong>
            It&apos;s Phil
          </p>
          <p>
            {'I '}
            <strong className="text-blue-700 dark:text-blue-400 font-bold animate-text-change animate-text-pulse"></strong>
          </p>
        </div>
        <div className="text-rose-400 font-bold">DeFi | Web Simulations | System Design</div>
      </div>

      <div className="w-full mx-auto text-center md:flex flex-row p-12 sm:px-0 justify-center">
        {cards.map(({ title, desc, href }, index) => (
          <NextLink key={`hero-item-${index}`} href={href} passHref>
            <div
              className={`shadow-sm mb-4 md:mb-0 mx-auto md:mx-8 xl:mx-12 py-2 px-4 md:px-8 rounded-lg w-[15rem] md:w-[20rem] md:h-[10rem]
              font-semibold bg-blue-200 dark:bg-blue-500 dark:text-gray-50
              md:hover:scale-[1.02] group shadow-orange-500 dark:shadow-rose-500`}
            >
              <div className="text-blue-500 dark:text-yellow-300 font-bold text-xl md:text-2xl group-hover:animate-text-pulse">
                {title}
              </div>
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
    desc: "Places where I play with new techs and ideas. It's builder season, keep it on anons!",
    href: '/projects',
  },
  {
    title: 'Blog',
    desc: 'Places where I track my learning journey. Sharing my thoughts and knowledges',
    href: '/blog',
  },
];
