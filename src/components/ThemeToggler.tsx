'use client';
import { RiSunFill, RiMoonFill } from 'react-icons/ri';

declare global {
  interface Window {
    __theme: string;
    __setPreferredTheme: (theme: string) => void;
  }
}

export default function ThemeToggler() {
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
