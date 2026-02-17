'use client';

import { useState } from 'react';
import { shopifyApps, shopifyIntegrations } from '@/data/portfolio';
import { ChevronDown, ChevronUp, Check, Zap, FileText, Package, Plug, Trophy } from 'lucide-react';

export default function ShopifyApps() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (key: string) => {
    setExpandedId(expandedId === key ? null : key);
  };

  return (
    <section id="shopify-apps" className="portfolio-section">
      <div className="portfolio-section-header">
        <span className="portfolio-section-number">03</span>
        <h2 className="portfolio-section-title">Shopify Development</h2>
      </div>

      <p className="portfolio-app-intro">
        Private apps and integrations built for an e-commerce client in the paint industry, showcasing full-stack Shopify development with modern tooling.
      </p>

      <h3 className="portfolio-app-subsection-title">Apps</h3>

      <div className="portfolio-app-grid">
        {shopifyApps.map((app) => {
          const key = `app-${app.id}`;
          const isExpanded = expandedId === key;

          return (
            <article key={key} className="portfolio-app-card">
              <div className="portfolio-app-header">
                <span className={`portfolio-app-status portfolio-app-status--${app.status === 'Production' ? 'production' : 'development'}`}>
                  {app.status}
                </span>
                <Package size={18} className="portfolio-app-icon" aria-hidden="true" />
              </div>

              <h3 className="portfolio-app-title">{app.name}</h3>
              <p className="portfolio-app-desc">{app.shortDescription}</p>

              <div className="portfolio-app-tech">
                {app.tech.map((tech) => (
                  <span key={tech} className="portfolio-app-tech-tag">{tech}</span>
                ))}
              </div>

              <div
                className={`portfolio-app-details ${isExpanded ? 'portfolio-app-details--open' : ''}`}
              >
                <div className="portfolio-app-details-inner">
                  <div className="portfolio-app-block">
                    <h4 className="portfolio-app-block-title">The Problem</h4>
                    <p className="portfolio-app-block-text">{app.problem}</p>
                  </div>

                  <div className="portfolio-app-block">
                    <h4 className="portfolio-app-block-title">The Solution</h4>
                    <p className="portfolio-app-block-text">{app.solution}</p>
                  </div>

                  <div className="portfolio-app-features">
                    <h4 className="portfolio-app-block-title">Features</h4>
                    <ul className="portfolio-app-feature-list">
                      {app.features.map((feature, i) => (
                        <li key={i} className="portfolio-app-feature">
                          <Check size={14} className="portfolio-app-feature-icon" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="portfolio-app-highlights">
                    <h4 className="portfolio-app-block-title">Technical Highlights</h4>
                    <ul className="portfolio-app-highlight-list">
                      {app.highlights.map((highlight, i) => (
                        <li key={i} className="portfolio-app-highlight">
                          <Zap size={14} className="portfolio-app-highlight-icon" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="portfolio-app-methodology">
                    <div className="portfolio-app-methodology-header">
                      <FileText size={16} aria-hidden="true" />
                      <h4 className="portfolio-app-methodology-title">{app.methodology.name}</h4>
                    </div>
                    <p className="portfolio-app-methodology-desc">{app.methodology.description}</p>
                    <ul className="portfolio-app-methodology-list">
                      {app.methodology.specHighlights.map((spec, i) => (
                        <li key={i}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <button
                className="portfolio-app-toggle"
                onClick={() => toggleExpand(key)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    <span>Hide Details</span>
                    <ChevronUp size={16} aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span>View Details</span>
                    <ChevronDown size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </article>
          );
        })}
      </div>

      <h3 className="portfolio-app-subsection-title">Integrations</h3>

      <div className="portfolio-app-grid">
        {shopifyIntegrations.map((integration) => {
          const key = `int-${integration.id}`;
          const isExpanded = expandedId === key;

          return (
            <article key={key} className="portfolio-app-card">
              <div className="portfolio-app-header">
                <span className={`portfolio-app-status portfolio-app-status--${integration.status === 'Production' ? 'production' : 'development'}`}>
                  {integration.status}
                </span>
                <Plug size={18} className="portfolio-app-icon" aria-hidden="true" />
              </div>

              <h3 className="portfolio-app-title">{integration.name}</h3>
              <p className="portfolio-app-desc">{integration.shortDescription}</p>

              <div className="portfolio-app-tech">
                {integration.tech.map((tech) => (
                  <span key={tech} className="portfolio-app-tech-tag">{tech}</span>
                ))}
              </div>

              <div
                className={`portfolio-app-details ${isExpanded ? 'portfolio-app-details--open' : ''}`}
              >
                <div className="portfolio-app-details-inner">
                  <div className="portfolio-app-block">
                    <h4 className="portfolio-app-block-title">The Problem</h4>
                    <p className="portfolio-app-block-text">{integration.problem}</p>
                  </div>

                  <div className="portfolio-app-block">
                    <h4 className="portfolio-app-block-title">The Solution</h4>
                    <p className="portfolio-app-block-text">{integration.solution}</p>
                  </div>

                  <div className="portfolio-app-features">
                    <h4 className="portfolio-app-block-title">Features</h4>
                    <ul className="portfolio-app-feature-list">
                      {integration.features.map((feature, i) => (
                        <li key={i} className="portfolio-app-feature">
                          <Check size={14} className="portfolio-app-feature-icon" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="portfolio-app-highlights">
                    <h4 className="portfolio-app-block-title">Technical Highlights</h4>
                    <ul className="portfolio-app-highlight-list">
                      {integration.highlights.map((highlight, i) => (
                        <li key={i} className="portfolio-app-highlight">
                          <Zap size={14} className="portfolio-app-highlight-icon" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {'outcome' in integration && integration.outcome && (
                    <div className="portfolio-app-outcome">
                      <div className="portfolio-app-outcome-header">
                        <Trophy size={16} aria-hidden="true" />
                        <h4 className="portfolio-app-outcome-title">Outcome</h4>
                      </div>
                      <p className="portfolio-app-outcome-text">{integration.outcome}</p>
                    </div>
                  )}
                </div>
              </div>

              <button
                className="portfolio-app-toggle"
                onClick={() => toggleExpand(key)}
                aria-expanded={isExpanded}
              >
                {isExpanded ? (
                  <>
                    <span>Hide Details</span>
                    <ChevronUp size={16} aria-hidden="true" />
                  </>
                ) : (
                  <>
                    <span>View Details</span>
                    <ChevronDown size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
