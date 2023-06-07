'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { KBarAnimator, KBarProvider, KBarPortal, KBarPositioner, KBarSearch } from 'kbar';
import { useMatches, KBarResults } from 'kbar';
import './KBar.css';
import { AiOutlineCode, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdArticle } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { IconType } from 'react-icons/lib';

type SearchBarProps = {
  children: React.ReactNode;
};

type actionItemProps = {
  id: string;
  name: string;
  shortcut: string[];
  keywords: string;
  section: string;
  perform: () => any;
  icon: React.ReactElement<IconType>;
};

export default function SearchBar(props: SearchBarProps) {
  const router = useRouter();

  const actions: actionItemProps[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <CgProfile size="1.5rem" />,
    },
    {
      id: 'blogs',
      name: 'Blogs',
      shortcut: ['b'],
      keywords: 'go-blogs',
      section: 'Go To',
      perform: () => router.push('/blog'),
      icon: <MdArticle size="1.5rem" />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () => window.open('https://github.com/PhiDung-hub/philho.xyz', '_blank'),
      icon: <AiOutlineCode size="1.5rem" />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <AiOutlineFundProjectionScreen size="1.5rem" />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="!pt-[20vh] box-border bg-black bg-opacity-80">
          <KBarAnimator
            className="bg-orange-50 dark:bg-gray-900 max-w-[80vw] md:max-w-[42rem] lg:max-w-[50rem] w-full 
            rounded-lg overflow-hidden backdrop-filter backdrop-saturate-[300%] backdrop-blur-[25px] hide-scrollbar"
          >
            <div className="flex">
              <KBarSearch
                defaultPlaceholder="Searching ..."
                className="flex-1 bg-orange-50 dark:bg-gray-900 pt-3 px-4 text-xl w-full box-border outline-none border-none m-0 text-primary"
              />
              <kbd
                key={'$mod+K'}
                className="rounded-[4px] py-2 px-3 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10"
              >
                ⌘+K
              </kbd>
            </div>
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) => {
        if (typeof item === 'string') {
          return <div className="uppercase font-bold text-xl p-4">{item}</div>;
        } else {
          return <ResultItem action={item} active={active} />;
        }
      }}
    />
  );
}

function ResultItem({ action, active }: { action: any; active: boolean }) {
  return (
    <div
      className={`flex p-2 rounded-md items-center justify-between m-0 cursor-pointer ${
        active ? 'bg-opacity-5 bg-black dark:bg-white dark:bg-opacity-5' : ''
      }`}
    >
      <div className="flex gap-2 items-center text-xl">
        {action.icon ?? null}
        <div className="flex flex-col">
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div className="grid grid-flow-col gap-2 text-lg" aria-hidden>
          {action.shortcut.map((shortcut: string) => (
            <kbd
              key={shortcut}
              className="rounded-[4px] py-1 px-3 uppercase bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10"
            >
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
}
