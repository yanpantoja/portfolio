'use client';

import { skills } from '@/data/portfolio';
import { Code2, Server, ShoppingCart, Wrench } from 'lucide-react';

const categoryIcons = {
  shopify: ShoppingCart,
  frontend: Code2,
  backend: Server,
  tools: Wrench,
};

const categoryLabels = {
  shopify: 'Shopify',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & Platforms',
};

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">02</span>
        <h2 className="portfolio-section-title">Skills</h2>
      </div>

      <div className="portfolio-skills-grid">
        {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => {
          const Icon = categoryIcons[category];
          return (
            <div key={category} className="portfolio-skill-category">
              <div className="portfolio-skill-category-header">
                <Icon size={18} aria-hidden="true" />
                <h3>{categoryLabels[category]}</h3>
              </div>
              <ul className="portfolio-skill-list">
                {skills[category].map((skill) => (
                  <li key={skill.name} className="portfolio-skill-item">
                    <div className="portfolio-skill-info">
                      <span className="portfolio-skill-name">{skill.name}</span>
                      <span className="portfolio-skill-level">{skill.level}%</span>
                    </div>
                    <div className="portfolio-skill-bar">
                      <div
                        className="portfolio-skill-bar-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
