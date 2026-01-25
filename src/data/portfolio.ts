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
    title: "Smart Bundle Builder",
    description:
      "Shopify app for creating product bundles with progressive discounts. Drag-and-drop interface, Storefront API integration and automatic discount calculation.",
    longDescription: `Complete Shopify app that allows customers to create custom
      paint sample bundles. Includes tiered discount system,
      pre-defined templates and conversion analytics.`,
    tech: ["Remix", "React", "Prisma", "Shopify APIs", "PostgreSQL", "TypeScript"],
    category: "Shopify App",
    image: "/images/projects/bundle-builder.png",
    github: "https://github.com/yanpantoja/smart-bundle-builder",
    demo: "https://samplize.com",
    featured: true,
  },
  {
    id: 2,
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
