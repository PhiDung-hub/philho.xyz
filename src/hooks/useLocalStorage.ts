import { Dispatch, SetStateAction, useEffect, useState, useDebugValue } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

function useLocalStorage<T>(key: string, initialValue?: T | (() => T)): [T, SetValue<T>] {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(initialValue as T);
  useDebugValue(storedValue);

  useEffect(() => {
    if (initialValue != storedValue) {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, initialValue, storedValue]);

  useEffect(() => {
    const currentValue = localStorage.getItem(key);
    if (currentValue) setStoredValue(parse(currentValue));
  }, [key]);

  return [storedValue, setStoredValue];
}
// A wrapper for "JSON.parse()"" to support "undefined" value
function parse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

export default useLocalStorage;

