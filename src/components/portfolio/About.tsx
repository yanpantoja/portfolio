'use client';

import { personalInfo, education, experience } from '@/data/portfolio';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">01</span>
        <h2 className="portfolio-section-title">About</h2>
      </div>

      <div className="portfolio-about-grid">
        <div className="portfolio-about-main">
          <p className="portfolio-about-text">
            {personalInfo.bio}
          </p>
          <div className="portfolio-about-location">
            <MapPin size={16} aria-hidden="true" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <div className="portfolio-about-sidebar">
          <div className="portfolio-about-card">
            <div className="portfolio-about-card-header">
              <Briefcase size={16} aria-hidden="true" />
              <h3>Experience</h3>
            </div>
            <ul className="portfolio-about-list">
              {experience.map((exp, index) => (
                <li key={index} className="portfolio-about-item">
                  <span className="portfolio-about-item-title">{exp.role}</span>
                  <span className="portfolio-about-item-meta">{exp.company} · {exp.period}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="portfolio-about-card">
            <div className="portfolio-about-card-header">
              <GraduationCap size={16} aria-hidden="true" />
              <h3>Education</h3>
            </div>
            <ul className="portfolio-about-list">
              {education.map((edu, index) => (
                <li key={index} className="portfolio-about-item">
                  <span className="portfolio-about-item-title">{edu.degree}</span>
                  <span className="portfolio-about-item-meta">{edu.institution} · {edu.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
