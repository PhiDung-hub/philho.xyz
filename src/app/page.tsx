import { Achievements, Skills, Education, Experience, Hero } from '~/layouts';

export default function Home() {
  return (
    <main>
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
    </main>
  );
}
