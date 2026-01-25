'use client';

import { TerminalSquare, LayoutGrid } from 'lucide-react';
import type { Mode } from '@/lib/usePersistedMode';
import { personalInfo } from '@/data/portfolio';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

interface PortfolioProps {
  mode?: Mode;
  onToggleMode?: () => void;
}

export default function Portfolio({ mode, onToggleMode }: PortfolioProps = {}) {
  const firstName = personalInfo.name.split(' ')[0].toLowerCase();

  return (
    <div className="portfolio-container">
      {/* Header - Top Navigation */}
      <header className="portfolio-header">
        <div className="portfolio-header-inner">
          {/* Left: Toggle */}
          {onToggleMode && (
            <button
              onClick={onToggleMode}
              className="portfolio-header-toggle"
              aria-label={`Switch to ${mode === 'terminal' ? 'portfolio' : 'terminal'} mode`}
            >
              <span className={`portfolio-header-toggle-option ${mode === 'terminal' ? 'active' : ''}`}>
                <TerminalSquare size={14} aria-hidden="true" />
                <span>Terminal</span>
              </span>
              <span className={`portfolio-header-toggle-option ${mode === 'portfolio' ? 'active' : ''}`}>
                <LayoutGrid size={14} aria-hidden="true" />
                <span>Portfolio</span>
              </span>
            </button>
          )}

          {/* Center: Brand */}
          <span className="portfolio-header-brand">
            {firstName}@dev
          </span>

          {/* Right: Navigation Links */}
          <nav className="portfolio-header-nav">
            <a href="#about" className="portfolio-header-link">About</a>
            <a href="#skills" className="portfolio-header-link">Skills</a>
            <a href="#projects" className="portfolio-header-link">Projects</a>
            <a href="#experience" className="portfolio-header-link">Experience</a>
            <a href="#contact" className="portfolio-header-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
