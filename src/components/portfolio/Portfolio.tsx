'use client';

import { useState } from 'react';
import { TerminalSquare, LayoutGrid, Menu, X } from 'lucide-react';
import type { Mode } from '@/lib/usePersistedMode';
import { personalInfo } from '@/data/portfolio';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Contact from './Contact';

interface PortfolioProps {
  mode?: Mode;
  onToggleMode?: () => void;
}

export default function Portfolio({ mode, onToggleMode }: PortfolioProps = {}) {
  const firstName = personalInfo.name.split(' ')[0].toLowerCase();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

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

          {/* Right: Navigation Links (Desktop) */}
          <nav className="portfolio-header-nav portfolio-header-nav--desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="portfolio-header-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="portfolio-header-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <nav
          className={`portfolio-header-nav--mobile ${mobileMenuOpen ? 'open' : ''}`}
          aria-hidden={!mobileMenuOpen}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="portfolio-header-link--mobile"
              onClick={handleNavClick}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="portfolio-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}
