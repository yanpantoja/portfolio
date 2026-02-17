'use client';

import { projects } from '@/data/portfolio';
import { Github, ExternalLink, Star } from 'lucide-react';

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">04</span>
        <h2 className="portfolio-section-title">Projects</h2>
      </div>

      <div className="portfolio-projects-featured">
        {featuredProjects.map((project) => (
          <article key={project.id} className="portfolio-project-card portfolio-project-card--featured">
            <div className="portfolio-project-header">
              <span className="portfolio-project-badge">
                <Star size={12} aria-hidden="true" />
                Featured
              </span>
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

      {otherProjects.length > 0 && (
        <div className="portfolio-projects-other">
          <h3 className="portfolio-projects-other-title">Other Projects</h3>
          <div className="portfolio-projects-grid">
            {otherProjects.map((project) => (
              <article key={project.id} className="portfolio-project-card">
                <span className="portfolio-project-category">{project.category}</span>
                <h4 className="portfolio-project-title">{project.title}</h4>
                <p className="portfolio-project-desc">{project.description}</p>

                <div className="portfolio-project-tech">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="portfolio-project-tech-tag">{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
