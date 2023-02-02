import { useEffect, useState } from 'react';

// This hook allows you to debounce any fast changing value. The debounced value will only reflect the latest
// value when the useDebounce hook has not been called for the specified time period. When used in conjunction
// with useEffect, as we do in the recipe below, you can easily ensure that expensive operations like API calls
// are not executed too frequently.
function useDebounce<T>(value: T, delay: number): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
}

export default useDebounce;
