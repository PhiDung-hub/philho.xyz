import { MutableRefObject, useEffect, useState } from 'react';

// This hook allows you to easily detect when an element is visible on the screen as well as specify how much of the element
// should be visible before being considered on screen. Perfect for lazy loading images or triggering animations when the
// user has scrolled down to a particular section.
function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin = '0px'
): boolean {
  // State and setter for storing whether element is visible. Take note of the callback with useEffect:
  // https://stackoverflow.com/a/67069936/15084416
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const observeCallback = (entries: IntersectionObserverEntry[]) => {
      // Update our state when observer callback fires
      const [entry] = entries;
      setIntersecting(entry.isIntersecting);
    };
    let observerRefValue: Element | null = null;
    const observer = new IntersectionObserver(observeCallback, { rootMargin });
    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, [ref, rootMargin]); // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting;
}

export default useOnScreen;
