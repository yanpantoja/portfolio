'use client';

import { projects } from '@/data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">04</span>
        <h2 className="portfolio-section-title">Projects</h2>
      </div>

      <div className="portfolio-projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="portfolio-project-card">
            <div className="portfolio-project-header">
              {'status' in project && project.status && (
                <span className={`portfolio-app-status portfolio-app-status--${project.status === 'Production' ? 'production' : 'development'}`}>
                  {project.status}
                </span>
              )}
              <span className="portfolio-project-category">{project.category}</span>
            </div>
            <h3 className="portfolio-project-title">{project.title}</h3>
            <p className="portfolio-project-desc">{project.longDescription || project.description}</p>

            <div className="portfolio-project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="portfolio-project-tech-tag">{tech}</span>
              ))}
            </div>

            <div className="portfolio-project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-project-link"
                >
                  <Github size={16} aria-hidden="true" />
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-project-link"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
