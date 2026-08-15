import { useState, useEffect } from 'react';

export function useSessionState<T>(key: string, defaultValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const saved = sessionStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading sessionStorage for', key, e);
    }
    return defaultValue;
  });

  useEffect(() => {
    try {
      if (state === null || state === undefined) {
        sessionStorage.removeItem(key);
      } else {
        sessionStorage.setItem(key, JSON.stringify(state));
      }
    } catch (e) {
      console.error('Error writing sessionStorage for', key, e);
    }
  }, [key, state]);

  return [state, setState];
}
