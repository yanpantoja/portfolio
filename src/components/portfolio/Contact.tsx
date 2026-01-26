'use client';

import { personalInfo } from '@/data/portfolio';
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="portfolio-section portfolio-section--contact">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">06</span>
        <h2 className="portfolio-section-title">Contact</h2>
      </div>

      <div className="portfolio-contact-content">
        <p className="portfolio-contact-text">
          Interested in working together? Let&apos;s connect and discuss how I can help bring your project to life.
        </p>

        <div className="portfolio-contact-grid">
          <a
            href={`mailto:${personalInfo.email}`}
            className="portfolio-contact-card portfolio-contact-card--primary"
          >
            <Mail size={24} aria-hidden="true" />
            <div className="portfolio-contact-card-content">
              <span className="portfolio-contact-card-label">Email</span>
              <span className="portfolio-contact-card-value">{personalInfo.email}</span>
            </div>
            <ArrowUpRight size={20} className="portfolio-contact-card-arrow" aria-hidden="true" />
          </a>

          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-contact-card"
          >
            <Github size={24} aria-hidden="true" />
            <div className="portfolio-contact-card-content">
              <span className="portfolio-contact-card-label">GitHub</span>
              <span className="portfolio-contact-card-value">View Profile</span>
            </div>
            <ArrowUpRight size={20} className="portfolio-contact-card-arrow" aria-hidden="true" />
          </a>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-contact-card"
          >
            <Linkedin size={24} aria-hidden="true" />
            <div className="portfolio-contact-card-content">
              <span className="portfolio-contact-card-label">LinkedIn</span>
              <span className="portfolio-contact-card-value">Connect</span>
            </div>
            <ArrowUpRight size={20} className="portfolio-contact-card-arrow" aria-hidden="true" />
          </a>

          <div className="portfolio-contact-card portfolio-contact-card--location">
            <MapPin size={24} aria-hidden="true" />
            <div className="portfolio-contact-card-content">
              <span className="portfolio-contact-card-label">Location</span>
              <span className="portfolio-contact-card-value">{personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="portfolio-footer">
        <p>
          Built with Next.js & TypeScript
          <span className="portfolio-footer-divider">·</span>
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </footer>
    </section>
  );
}
