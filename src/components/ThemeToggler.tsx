'use client';
import { useDarkMode } from '~/hooks';
import {RiSunFill, RiMoonFill} from "react-icons/ri";


export default function ThemeToggler({ className }: { className?: string }) {
  const { toggle, isDarkMode } = useDarkMode();

  return (
    <div onClick={toggle} className={className}>
      {isDarkMode ? <RiMoonFill size="2rem" className="text-[#007BFF]" /> : <RiSunFill size="2rem" className="text-[#FF5900]" />}
    </div>
  );
}
