import React from 'react';

type BulletPoint = {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
};

export default function ResumeBulletPoint({ title, titleClassName, children }: BulletPoint) {
  return (
    <p className="py-1">
      <span className={`font-semibold text-sky-600 dark:text-sky-200 ${titleClassName}`}>{title}</span>
      <span className="dark:opacity-90">{children}</span>
    </p>
  );
}
