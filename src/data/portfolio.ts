export const personalInfo = {
  name: "Yan Pantoja",
  role: "Full Stack Developer",
  tagline: "Shopify Developer",
  bio: `Full Stack Developer with 8+ years of experience building web and e-commerce solutions, with strong expertise in PHP, Magento 2, and Shopify. Started my career with PHP back-end development, evolving into the Magento 2 ecosystem where I worked for over 3 years on payment gateway integrations, maintenance, and custom module development. Currently working with Shopify, specialized in creating and maintaining custom themes using Liquid, JavaScript, and CSS, focusing on performance, usability, and third-party system integrations.`,
  location: "Vila Velha – ES, Brazil",
  phone: "(27) 9.9881-9839",
  email: "yanmpantoja@gmail.com",
  social: {
    github: "https://github.com/yanpantoja",
    linkedin: "https://linkedin.com/in/yanpantoja",
  },
};

export const skills = {
  shopify: [
    { name: "Liquid", level: 95 },
    { name: "Theme Development", level: 95 },
    { name: "Shopify APIs", level: 90 },
    { name: "App Integrations", level: 90 },
    { name: "Performance Optimization", level: 90 },
  ],
  frontend: [
    { name: "JavaScript", level: 95 },
    { name: "HTML5/CSS3", level: 95 },
    { name: "TailwindCSS", level: 90 },
    { name: "LESS/SASS", level: 85 },
  ],
  backend: [
    { name: "PHP", level: 95 },
    { name: "Laravel/Lumen", level: 90 },
    { name: "MySQL", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 80 },
  ],
  tools: [
    { name: "Git/GitHub", level: 95 },
    { name: "Docker", level: 80 },
    { name: "Jira", level: 85 },
    { name: "Magento 2", level: 85 },
    { name: "WooCommerce", level: 75 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Multi-Channel Automation",
    description:
      "Multi-channel communication automation system using Chatwoot and n8n for small and medium businesses.",
    longDescription: `Automation solution that integrates WhatsApp, email and social media
      through Chatwoot with automated workflows via n8n.`,
    tech: ["Chatwoot", "n8n", "Node.js", "Docker", "PostgreSQL"],
    category: "Automation",
    image: "/images/projects/automation.png",
    github: null,
    demo: null,
    featured: false,
  },
];

export const shopifyApps = [
  {
    id: 1,
    name: "Custom Product Sorting Extension",
    status: "In Development",
    shortDescription:
      "Shopify app that adds metafield-based sorting to collection pages, solving a core platform limitation where Shopify cannot natively sort products by custom metafield values.",
    problem:
      "Shopify's native sorting and Storefront API do not support ordering products by metafield values. For stores selling paint samples, customers need to browse colors sorted by brightness (Light Reflectance Value), but this was impossible with built-in tools.",
    solution:
      "Built an app that pre-fetches all product data via Bulk Operations API, caches sorted results in-memory, and serves paginated responses through an App Proxy endpoint with ~10-50ms response times. A Theme App Extension injects sorting options seamlessly into the existing theme.",
    features: [
      "Bidirectional sorting by Light Reflectance Value (light-to-dark / dark-to-light)",
      "In-memory cache with atomic swap pattern for thread-safe updates",
      "Webhook-driven cache refresh with 30-second debounce window",
      "Client-side integration with Shopify's native collection filters",
      "URL persistence for sharing and bookmarking sorted views",
      "Full accessibility: keyboard navigation, ARIA labels, screen reader support",
    ],
    tech: ["React Router v7", "TypeScript", "Prisma", "Shopify Bulk Operations API", "Theme App Extension", "Vanilla JS"],
    highlights: [
      "~10-50ms cache response times supporting 5,000+ products",
      "Atomic cache swap pattern prevents race conditions during updates",
      "~30KB JS bundle (~8KB gzipped) with zero external dependencies on storefront",
    ],
    methodology: {
      name: "Spec Driven Development (Speckit)",
      description:
        "Developed using a spec-first methodology where comprehensive specifications are written before any implementation. Each feature goes through structured phases: Specification → Research & Architecture Decisions → Planning → Task Generation → Implementation.",
      specHighlights: [
        "Technology-agnostic specifications with prioritized user stories (Given-When-Then acceptance criteria)",
        "Architecture Decision Records (ADRs) documenting trade-offs and alternatives considered",
        "Constitution-based validation ensuring all features align with project principles",
        "5 implementation phases derived from spec, each independently deliverable",
      ],
    },
  },
  {
    id: 2,
    name: "Smart Bundle Builder",
    status: "In Development",
    shortDescription:
      "Shopify app enabling customers to create custom product bundles with progressive volume discounts. Features server-side discount validation via Rust/WASM Cart Transform.",
    problem:
      "The store needed a way for customers to pick individual color samples and automatically receive volume discounts visible directly in the cart — not just at checkout. Standard Shopify discount codes couldn't handle dynamic bundle sizing or cart-level visual feedback.",
    solution:
      "Built a full-stack solution with vanilla Web Components on the storefront for zero-dependency performance, a Rust/WASM Cart Transform function that runs server-side on Shopify's infrastructure to merge cart items and apply discounts tamper-proof, and an admin dashboard for configuring discount tiers.",
    features: [
      "Interactive color grid with search, brand, and color family filters",
      "Progressive volume discounts visible directly in the cart",
      "Rust/WASM Cart Transform for server-side bundle merging and discount application",
      "Admin dashboard with discount tier configuration and bundle analytics",
      "Color swatches displayed on merged cart line items",
      "Zero external JS dependencies on storefront (vanilla Web Components)",
    ],
    tech: ["React Router v7", "TypeScript", "Rust/WASM", "Shopify Cart Transform", "Web Components", "Prisma", "Polaris"],
    highlights: [
      "Cart Transform (Rust/WASM) ensures discounts can't be manipulated client-side",
      "3 custom Web Components with event-driven architecture (zero dependencies)",
      "Cross-component communication via Custom Events pattern",
    ],
    methodology: {
      name: "Spec Driven Development (Speckit)",
      description:
        "Each feature was specified, researched, and planned before implementation. The project has a written constitution defining core principles (Shopify-Native Architecture, Server-Side Authority, Progressive Enhancement) that all specs must pass before proceeding.",
      specHighlights: [
        "3 feature specs (Bundle Builder, Cart Transform, Progress Bar Enhancement) each with full spec → plan → tasks lifecycle",
        "Project constitution (v1.1.0) with 5 core principles validated against every feature",
        "API contracts defined upfront between Admin, App Proxy, and Cart Transform layers",
        "Parallel task execution enabled by independent user story decomposition",
      ],
    },
  },
];

export const experience = [
  {
    role: "Shopify Developer",
    company: "IM Digital",
    period: "Nov 2021 - Present",
    description:
      "Custom Shopify theme development using Liquid, JavaScript, and CSS. Storefront optimization improving performance, responsiveness, and Core Web Vitals. Implementation of custom integrations with external APIs and Shopify Apps. Collaboration with UI/UX teams to deliver pixel-perfect, highly functional stores. Magento 2 platform maintenance including custom module development and external system integrations.",
  },
  {
    role: "Software Engineer",
    company: "Pagar.me",
    period: "Feb 2021 - Nov 2021",
    description:
      "Creation and support of payment gateway integrations for Magento 2. Development and maintenance of WooCommerce platforms. Application of SOLID principles and clean code best practices in PHP development. Support in payment module implementation ensuring efficient customer onboarding.",
  },
  {
    role: "Back-end Developer",
    company: "Liberfly",
    period: "Oct 2019 - Feb 2021",
    description:
      "RESTful API development using Laravel/Lumen framework and MySQL database. Legacy system refactoring focusing on performance improvement and scalability. Code reviews and application of agile methodologies (SCRUM).",
  },
];

export const education = [
  {
    degree: "Master's in Bioinformatics",
    institution: "UFPA - Federal University of Pará",
    year: "2019",
  },
  {
    degree: "Bachelor's in Computer Engineering",
    institution: "Estácio",
    year: "2016",
  },
];

export const certifications = [
  {
    name: "Liquid Storefronts for Theme Developers",
    issuer: "Shopify",
    issued: "Jul 2025",
    expires: "Jul 2027",
    credentialUrl: "https://www.credly.com/badges/cb2466ff-3899-4e40-bbf4-8f0c42f03ecb/linked_in_profile",
  },
  {
    name: "Shopify Development Fundamentals: Verified Skill Badge",
    issuer: "Shopify",
    issued: "Jul 2025",
    expires: "Jul 2027",
    credentialUrl: "https://www.credly.com/badges/b186c99f-27ab-4426-b79d-93fd3fa1e4c2/linked_in_profile",
  },
];
