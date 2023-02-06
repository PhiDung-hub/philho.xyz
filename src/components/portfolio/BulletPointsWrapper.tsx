import React from 'react';

export default function ResumeBulletPointsWrapper({ children }: { children: React.ReactNode }) {
  return <div className="text-base sm:text-xl md:text-2xl pt-2 pb-6 md:pb-8">{children}</div>;
}
