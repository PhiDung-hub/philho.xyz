'use client';

import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { usePathname } from 'next/navigation';

interface MenuProps {
  children?: React.ReactNode;
}

export default function Menu(props: MenuProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Disable menu when change to new URL
  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Closed Menu View */}
      {!menuOpen && (
        <button onClick={toggleMenu} aria-label="Open menu">
          <FiMenu size={30} />
        </button>
      )}
      {/* Open Menu View */}
      {menuOpen && (
        <>
          <button onClick={toggleMenu} className="z-[999]" aria-label="Close menu">
            <MdClose size={30} />
          </button>
          <div className="fixed flex bg-gray-900 flex-col w-screen h-screen top-0 left-0 bottom-0 right-0 justify-center items-center">
            {props.children}
          </div>
        </>
      )}
    </>
  );
}
