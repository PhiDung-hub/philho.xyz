'use client';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';
import { setupThemeManager } from '~/providers/ThemeProvider';
import { useEffect } from 'react';

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

export default function ThemeToggler() {
  // Recheck for dynamic routes, otherwise `__theme` and `__setPreferredTheme` are ill-defined
  useEffect(() => {
    if (!window.__setPreferredTheme) {
      setupThemeManager();
    }
  }, []);

  return (
    <>
      <button
        onClick={() => {
          window.__setPreferredTheme('light');
        }}
        className="hidden dark:flex"
      >
        <RiMoonFill size="2rem" className="text-[#007BFF]" />
      </button>
      <button
        onClick={() => {
          window.__setPreferredTheme('dark');
        }}
        className="flex dark:hidden"
      >
        <RiSunFill size="2rem" className="text-[#FF5900]" />
      </button>
    </>
  );
}
