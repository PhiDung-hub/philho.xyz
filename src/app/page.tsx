import { HomePage } from '~/layouts';

export default function Home() {
  return (
      <main>
        <HomePage.Hero />
        <HomePage.Education />
        <HomePage.Experience />
        <HomePage.Skills />
        <HomePage.Achievements />
      </main>
  );
}
