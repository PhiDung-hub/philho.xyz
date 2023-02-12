import { useEffect, useState, useRef } from 'react';

/**
 * Return id of element with id among `spyIds` inside the viewport by using `IntersectionObserver.isIntersecting` interface.
 **/
export default function useScrollSpy(spyIds: string[], options: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = spyIds.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [spyIds, options]);

  return activeId;
}
