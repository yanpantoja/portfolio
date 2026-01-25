'use client';

import { useState, useCallback, useSyncExternalStore } from 'react';

export type Mode = 'terminal' | 'portfolio';

const getServerSnapshot = () => false;
const subscribe = () => () => {};

export function usePersistedMode(defaultMode: Mode = 'terminal') {
  // Use useSyncExternalStore to safely detect client-side mounting
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    getServerSnapshot
  );

  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window === 'undefined') return defaultMode;
    const saved = localStorage.getItem('portfolio-mode') as Mode | null;
    if (saved && (saved === 'terminal' || saved === 'portfolio')) {
      return saved;
    }
    return defaultMode;
  });

  const toggleMode = useCallback(() => {
    setMode(prev => {
      const newMode = prev === 'terminal' ? 'portfolio' : 'terminal';
      localStorage.setItem('portfolio-mode', newMode);
      return newMode;
    });
  }, []);

  return { mode, toggleMode, mounted };
}
