'use client';
import { CgSun } from 'react-icons/cg';
import { BiMoon } from 'react-icons/bi';
import { useDarkMode } from '~/hooks';

export default function ThemeToggler({ className }: { className?: string }) {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <div onClick={toggle} className={className}>
      {isDarkMode ? <BiMoon color="#007BFF" size="2rem" /> : <CgSun color="#FF5900" size="2rem" />}
    </div>
  );
}
