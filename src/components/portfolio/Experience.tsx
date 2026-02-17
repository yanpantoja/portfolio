'use client';

import { experience } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">05</span>
        <h2 className="portfolio-section-title">Experience</h2>
      </div>

      <div className="portfolio-timeline">
        {experience.map((exp, index) => (
          <article key={index} className="portfolio-timeline-item">
            <div className="portfolio-timeline-marker" aria-hidden="true">
              <span className="portfolio-timeline-dot" />
              {index < experience.length - 1 && <span className="portfolio-timeline-line" />}
            </div>

            <div className="portfolio-timeline-content">
              <div className="portfolio-timeline-header">
                <h3 className="portfolio-timeline-role">{exp.role}</h3>
                <span className="portfolio-timeline-period">{exp.period}</span>
              </div>
              <p className="portfolio-timeline-company">{exp.company}</p>
              <p className="portfolio-timeline-desc">{exp.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
