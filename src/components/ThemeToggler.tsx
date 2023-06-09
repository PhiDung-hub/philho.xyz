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
        aria-label="theme-toggler"
      >
        <RiMoonFill size="2rem" className="text-[#007BFF]" />
      </button>
      <button
        onClick={() => {
          window.__setPreferredTheme('dark');
        }}
        className="flex dark:hidden"
        aria-label="theme-toggler"
      >
        <RiSunFill size="2rem" className="text-[#FF5900]" />
      </button>
    </>
  );
}
