import React from 'react';

export default function useScrollspy(ids: string[], options: IntersectionObserverInit) {
  const [activeId, setActiveId] = React.useState<string>();
  const observer = React.useRef(null);

  React.useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
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
  }, [ids, options]);

  return activeId;
}
