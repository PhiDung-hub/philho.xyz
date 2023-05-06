'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '~/hooks';

interface UseDarkModeOutput {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
}

// Create a new context for the dark mode state
export const DarkModeContext = createContext<UseDarkModeOutput>({
  isDarkMode: true,
  toggle: () => {},
  enable: () => {},
  disable: () => {},
});

export const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>('is-phil-website-dark');

  useEffect(() => {
    const root = window.document.documentElement.classList;
    if (isDarkMode) {
      root.add('dark');
    } else {
      root.remove('dark');
    }
  }, [isDarkMode]);

  const toggle = () => setDarkMode((prev) => !prev);
  const enable = () => setDarkMode(true);
  const disable = () => setDarkMode(false);

  const value: UseDarkModeOutput = {
    isDarkMode,
    toggle,
    enable,
    disable,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Create a custom hook that will allow other components to access the dark mode state
export const useDarkMode = () => useContext(DarkModeContext);
