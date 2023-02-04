'use client';
import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

function useDarkMode(): UseDarkModeOutput {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>('is-phil-website-dark');

  useEffect(() => {
    const root = window.document.documentElement.classList;
    if (isDarkMode) {
      root.add('dark');
    } else {
      root.remove('dark');
    }
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}

export default useDarkMode;
