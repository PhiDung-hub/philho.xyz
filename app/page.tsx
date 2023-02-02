import { ThemeToggler } from '~/components';

export default function Home() {
  return (
    <main>
      <div className={`font-mono text-[1.2rem] animate-text-bounce`}>
        <span>
          Hi, I&apos;m Phil<strong className="text-[1.5rem] ml-1">👋</strong>. I{' '}
        </span>
        <span className="text-blue-700 change-text animate-pulse font-semibold"></span>
        <span> technology related to </span>
        <span className="text-rose-400 font-bold"> Blockchain & Distributed Systems | Numerical Simulation | Artifical Intelligence.</span>
      </div>
      <div>
        <ThemeToggler />
      </div>
    </main>
  );
}
