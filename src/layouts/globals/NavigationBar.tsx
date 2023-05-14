'use client';

import { useState, useEffect } from 'react';
import { Menu, ThemeToggler } from '~/components';
import NextLink from 'next/link';

const links: { desc: string; href: string }[] = [
  // {
  //   desc: 'Projects',
  //   href: '/projects',
  // },
  {
    desc: 'Blog',
    href: '/blog',
  },
];

export default function NavigationBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      :target {
        scroll-margin-top: ${sticky ? '80px' : '0'};
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [sticky]);

  const handleScroll = () => {
    const SCROLL_Y_THRESHOLD = 200;
    if (window.scrollY > SCROLL_Y_THRESHOLD) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <nav
      className={`top-0 w-full transition-all duration-200 ease-in-out z-[999] 
        ${sticky == true ? 'sticky drop-shadow-md bg-gray-50 dark:bg-gray-800' : 'absolute bg-transparent h-32 pt-4'}`}
    >
      <div className="custom-container mx-auto py-4">
        {/* Desktop view */}
        <div className="hidden md:flex justify-between items-center">
          <NextLink id="nav-logo" href="/" passHref>
            <div className="text-[1.75rem] font-logo font-semibold text-blue-600 dark:text-blue-200 hover:scale-105 duration-300 hover:animate-text-pulse">
              philho.xyz
            </div>
          </NextLink>
          <div
            id="nav-menu-list"
            className="hidden md:flex flex-1 gap-12 xl:gap-20 ml-32 text-rose-500 dark:text-rose-400 font-logo font-bold uppercase"
          >
            {links.map(({ desc, href }, index) => (
              <NextLink key={`nav-item-${index}`} href={href} passHref={true}>
                <p className="text-[1.5rem] group">
                  {desc}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellow-500 dark:bg-sky-400"></span>
                </p>
              </NextLink>
            ))}
          </div>
          <ThemeToggler />
        </div>
        {/* Mobile view */}
        <div className="flex md:hidden justify-between items-center px-2">
          <Menu>
            <NextLink id="nav-logo" href="/" passHref>
              <div className="text-[1.75rem] font-logo font-semibold text-blue-600 dark:text-blue-200 hover:animate-text-pulse">
                philho.xyz
              </div>
            </NextLink>
            {links.map(({ desc, href }, index) => (
              <NextLink key={`nav-item-${index}`} href={href} passHref className="py-4">
                <p className="text-[1.5rem] group text-rose-500 dark:text-rose-400 font-logo font-bold uppercase">
                  {desc}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-yellow-500 dark:bg-sky-400"></span>
                </p>
              </NextLink>
            ))}
          </Menu>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}
