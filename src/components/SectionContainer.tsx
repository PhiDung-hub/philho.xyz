import React from 'react';

export default function SectionContainer({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div
      className={`min-h-[50rem] mx-auto custom-container py-8 md:py-24 xl:py-32 
      ${className}`}
    >
      {children}
    </div>
  );
}
