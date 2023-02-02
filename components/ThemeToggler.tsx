'use client';
import { CgSun } from 'react-icons/cg';
import { BiMoon } from 'react-icons/bi';
import { useDarkMode } from '~/hooks';

export default function ThemeToggler() {
  const { toggle, isDarkMode } = useDarkMode();

  return <div onClick={toggle}>{isDarkMode ? <BiMoon color="#007BFF" size="2rem" /> : <CgSun color="#ffc107" size="2rem" />}</div>;
}
