import React from 'react';

export default function SectionContainer({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={`min-h-[50rem] mx-auto custom-container 
      ${className}`}
    >
      {children}
    </div>
  );
}
