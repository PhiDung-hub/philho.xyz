'use client';
import { FcSearch } from 'react-icons/fc';
import { useKBar } from 'kbar';

export default function SearchToggler({ wrapperClassname }: { wrapperClassname?: string }) {
  const { query } = useKBar();

  const handleClick = () => {
    query.toggle();
  };
  return (
    <div className={wrapperClassname}>
      <button onClick={handleClick} className="flex" aria-label="Mod+K-navigation-bar">
        <FcSearch size="2rem" />
      </button>
    </div>
  );
}
