'use client';

import { certifications } from '@/data/portfolio';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">05</span>
        <h2 className="portfolio-section-title">Certifications</h2>
      </div>

      <div className="portfolio-certifications-grid">
        {certifications.map((cert, index) => (
          <article key={index} className="portfolio-certification-card">
            <div className="portfolio-certification-icon">
              <Award size={24} aria-hidden="true" />
            </div>

            <div className="portfolio-certification-content">
              <h3 className="portfolio-certification-name">{cert.name}</h3>
              <p className="portfolio-certification-issuer">{cert.issuer}</p>

              <div className="portfolio-certification-dates">
                <span className="portfolio-certification-date">
                  Issued: {cert.issued}
                </span>
                <span className="portfolio-certification-divider">|</span>
                <span className="portfolio-certification-date">
                  Expires: {cert.expires}
                </span>
              </div>
            </div>

            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-certification-link"
              aria-label={`View credential for ${cert.name}`}
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>View Credential</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
