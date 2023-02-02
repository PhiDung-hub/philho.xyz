import styles from './page.module.css';

// Routing fundamental: https://beta.nextjs.org/docs/routing/fundamentals#special-files
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hi, I&apos;m Phil 👋. This site is under construction. Revisit soon for more feature! 
        </p>
      </div>

      <div className={styles.center}> </div>
    </main>
  );
}
