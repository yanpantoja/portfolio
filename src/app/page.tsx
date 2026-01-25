'use client';

import { usePersistedMode } from '@/lib/usePersistedMode';
import Terminal from '@/components/Terminal';
import Portfolio from '@/components/portfolio/Portfolio';

export default function Home() {
  const { mode, toggleMode, mounted } = usePersistedMode('terminal');

  // Show terminal as default during SSR to prevent hydration mismatch
  if (!mounted) {
    return <Terminal />;
  }

  return mode === 'terminal' ? (
    <Terminal mode={mode} onToggleMode={toggleMode} />
  ) : (
    <Portfolio mode={mode} onToggleMode={toggleMode} />
  );
}
