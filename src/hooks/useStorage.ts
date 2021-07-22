import { useEffect, useState } from 'react';

export function useStorage<T = any>(key: string, defaultValue: T = null) {
  const [state, setState] = useState<T>(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    }

    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
