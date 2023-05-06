'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  function goBack() {
    router.back();
  }

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center font-mono text-3xl md:text-4xl text-yellow-500 dark:text-slate-400">
      <div className="italic text-center">404 - Ye have set sail into th' unknown waters, matey!</div>
      <button
        id="go-back"
        onClick={goBack}
        className="mt-4 md:mt-8 font-semibold text-red-500 dark:text-blue-400 hover:animate-text-pulse hover:scale-105 hover:cursor-pointer"
      >
        RESPAWN HERE
      </button>
    </div>
  );
}
