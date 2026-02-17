import { personalInfo, skills, projects, experience, education, certifications, shopifyApps, shopifyIntegrations } from "@/data/portfolio";

export type CommandOutput = string[];

const SPACE = "\u00A0"; // Non-breaking space

// ASCII Banner
const ASCII_BANNER = [
  "██╗   ██╗ █████╗ ███╗   ██╗",
  "╚██╗ ██╔╝██╔══██╗████╗  ██║",
  " ╚████╔╝ ███████║██╔██╗ ██║",
  "  ╚██╔╝  ██╔══██║██║╚██╗██║",
  "   ██║   ██║  ██║██║ ╚████║",
  "   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝",
];

export const COMMANDS = [
  "help",
  "about",
  "skills",
  "shopify",
  "projects",
  "experience",
  "education",
  "certifications",
  "contact",
  "whoami",
  "repo",
  "banner",
  "clear",
  "neofetch",
];

export function getBanner(): CommandOutput {
  const output: CommandOutput = [""];

  ASCII_BANNER.forEach((line) => {
    output.push(`<span class="banner-line">${line.replace(/ /g, SPACE)}</span>`);
  });

  output.push("");
  output.push(`Welcome to <span class="command">${personalInfo.name}'s</span> terminal portfolio v1.0.0`);
  output.push(`Type <span class="command">'help'</span> for a list of available commands.`);
  output.push(`Switch to <span class="command">Portfolio</span> mode using the toggle in the top right corner.`);
  output.push("");

  return output;
}

export function getHelp(): CommandOutput {
  const commands = [
    ["'help'", "Display this help message"],
    ["'about'", "Learn more about me"],
    ["'skills'", "View my technical skills"],
    ["'shopify'", "Shopify development"],
    ["'projects'", "Browse my projects"],
    ["'experience'", "See my work history"],
    ["'education'", "Academic background"],
    ["'certifications'", "Professional certifications"],
    ["'contact'", "How to reach me"],
    ["'whoami'", "Display current user"],
    ["'neofetch'", "System information"],
    ["'repo'", "View source code"],
    ["'banner'", "Display the banner"],
    ["'clear'", "Clear the terminal"],
  ];

  const output: CommandOutput = [""];

  commands.forEach(([cmd, desc]) => {
    const padding = SPACE.repeat(18 - cmd.length);
    output.push(`${SPACE}${SPACE}<span class="command">${cmd}</span>${padding}${desc}`);
  });

  output.push("");
  output.push(`Press <span class="keys">[Tab]</span> for auto completion.`);
  output.push(`Press <span class="keys">[Esc]</span> to clear the input line.`);
  output.push(`Press <span class="keys">[↑][↓]</span> to scroll through command history.`);
  output.push("");

  return output;
}

export function getAbout(): CommandOutput {
  const output: CommandOutput = [""];

  output.push(personalInfo.bio.replace(/\s+/g, ' ').trim());
  output.push("");
  output.push(`${SPACE}${SPACE}<span class="command">Location:</span>${SPACE.repeat(8)}${personalInfo.location}`);
  output.push(`${SPACE}${SPACE}<span class="command">Role:</span>${SPACE.repeat(12)}${personalInfo.role}`);
  output.push(`${SPACE}${SPACE}<span class="command">Focus:</span>${SPACE.repeat(11)}${personalInfo.tagline}`);
  output.push("");

  return output;
}

export function getSkills(): CommandOutput {
  const output: CommandOutput = [""];

  const renderSkillCategory = (title: string, skillList: typeof skills.frontend) => {
    output.push(`<span class="command">${title}</span>`);
    skillList.forEach((skill) => {
      const namepadding = SPACE.repeat(Math.max(1, 24 - skill.name.length));
      const barWidth = Math.round(skill.level / 10);
      const bar = "█".repeat(barWidth) + "░".repeat(10 - barWidth);
      output.push(`${SPACE}${SPACE}${skill.name}${namepadding}<span class="keys">[${bar}]</span> ${skill.level}%`);
    });
    output.push("");
  };

  renderSkillCategory("Shopify", skills.shopify);
  renderSkillCategory("Frontend", skills.frontend);
  renderSkillCategory("Backend", skills.backend);
  renderSkillCategory("Tools & Platforms", skills.tools);
  renderSkillCategory("AI & Methodology", skills.ai);

  return output;
}

export function getShopify(): CommandOutput {
  const output: CommandOutput = [""];

  output.push(`<span class="command">Shopify Development</span> — Built for an e-commerce client in the paint industry`);
  output.push("");

  output.push(`<span class="keys">── Apps ──</span>`);
  output.push("");

  shopifyApps.forEach((app, index) => {
    const statusColor = app.status === "Production" ? "#27c93f" : "#ffbd2e";
    output.push(`${SPACE}${SPACE}<span class="project-title">${app.name}</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span style="color:${statusColor}">[${app.status}]</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="project-desc">${app.shortDescription}</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="command">[${app.tech.join(", ")}]</span>`);
    output.push("");
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Features:</span>`);
    app.features.forEach((feature) => {
      output.push(`${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}• ${feature}`);
    });
    output.push("");
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Highlights:</span>`);
    app.highlights.forEach((highlight) => {
      output.push(`${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}⚡ ${highlight}`);
    });
    output.push("");
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Methodology:</span> ${app.methodology.name}`);
    if (index < shopifyApps.length - 1) output.push("─".repeat(40));
    output.push("");
  });

  output.push(`<span class="keys">── Integrations ──</span>`);
  output.push("");

  shopifyIntegrations.forEach((integration, index) => {
    const statusColor = integration.status === "Production" ? "#27c93f" : "#ffbd2e";
    output.push(`${SPACE}${SPACE}<span class="project-title">${integration.name}</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span style="color:${statusColor}">[${integration.status}]</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="project-desc">${integration.shortDescription}</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="command">[${integration.tech.join(", ")}]</span>`);
    output.push("");
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Features:</span>`);
    integration.features.forEach((feature) => {
      output.push(`${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}• ${feature}`);
    });
    output.push("");
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Highlights:</span>`);
    integration.highlights.forEach((highlight) => {
      output.push(`${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}${SPACE}⚡ ${highlight}`);
    });
    if (integration.outcome) {
      output.push("");
      output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Outcome:</span> ${integration.outcome}`);
    }
    if (index < shopifyIntegrations.length - 1) output.push("─".repeat(40));
    output.push("");
  });

  output.push(`${shopifyApps.length} app(s) + ${shopifyIntegrations.length} integration(s) listed`);
  output.push("");

  return output;
}

export function getProjects(): CommandOutput {
  const output: CommandOutput = [""];

  projects.forEach((project, index) => {
    const link = project.demo || project.github || "#";
    output.push(`${SPACE}${SPACE}<a href="${link}" target="_blank" class="link project-title">${project.title}</a>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="project-desc">${project.description}</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="command">[${project.tech.slice(0, 4).join(", ")}]</span>`);
    if (index < projects.length - 1) output.push("");
  });

  output.push("");
  output.push(`${projects.length} project(s) listed`);
  output.push("");

  return output;
}

export function getExperience(): CommandOutput {
  const output: CommandOutput = [""];

  experience.forEach((exp, index) => {
    output.push(`<span class="command">${exp.role}</span>`);
    output.push(`${SPACE}${SPACE}@ ${exp.company} | <span class="keys">${exp.period}</span>`);
    output.push(`${SPACE}${SPACE}${exp.description}`);
    if (index < experience.length - 1) output.push("");
  });

  output.push("");
  return output;
}

export function getEducation(): CommandOutput {
  const output: CommandOutput = [""];

  education.forEach((edu) => {
    output.push(`<span class="command">${edu.degree}</span>`);
    output.push(`${SPACE}${SPACE}${edu.institution} | <span class="keys">${edu.year}</span>`);
    output.push("");
  });

  return output;
}

export function getCertifications(): CommandOutput {
  const output: CommandOutput = [""];

  output.push(`<span class="command">Professional Certifications</span>`);
  output.push("");

  certifications.forEach((cert, index) => {
    output.push(`${SPACE}${SPACE}<a href="${cert.credentialUrl}" target="_blank" class="link project-title">${cert.name}</a>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}Issued by <span class="command">${cert.issuer}</span>`);
    output.push(`${SPACE}${SPACE}${SPACE}${SPACE}<span class="keys">Issued: ${cert.issued}</span> | <span class="keys">Expires: ${cert.expires}</span>`);
    if (index < certifications.length - 1) output.push("");
  });

  output.push("");
  output.push(`${certifications.length} certification(s) listed`);
  output.push("");

  return output;
}

export function getContact(): CommandOutput {
  const output: CommandOutput = [""];

  output.push(`Let's connect! Here's how to reach me:`);
  output.push("");
  output.push(`${SPACE}${SPACE}<span class="command">Email</span>${SPACE.repeat(10)}<a href="mailto:${personalInfo.email}" class="link">${personalInfo.email}</a>`);
  output.push(`${SPACE}${SPACE}<span class="command">GitHub</span>${SPACE.repeat(9)}<a href="${personalInfo.social.github}" target="_blank" class="link">github.com/${personalInfo.social.github.split('/').pop()}</a>`);
  output.push(`${SPACE}${SPACE}<span class="command">LinkedIn</span>${SPACE.repeat(7)}<a href="${personalInfo.social.linkedin}" target="_blank" class="link">linkedin.com/in/${personalInfo.social.linkedin.split('/').pop()}</a>`);
  output.push("");

  return output;
}

export function getWhoami(): CommandOutput {
  return [
    "",
    `<span class="command">${personalInfo.name}</span>`,
    `${personalInfo.role} | ${personalInfo.tagline}`,
    "",
  ];
}

export function getNeofetch(): CommandOutput {
  const firstName = personalInfo.name.split(" ")[0].toLowerCase();

  return [
    "",
    `<span class="prompt-user">${firstName}</span>@<span class="prompt-host">portfolio</span>`,
    "─".repeat(20),
    `<span class="command">OS:</span>${SPACE.repeat(10)}Developer Linux x86_64`,
    `<span class="command">Host:</span>${SPACE.repeat(8)}${personalInfo.location}`,
    `<span class="command">Kernel:</span>${SPACE.repeat(6)}8+ years of experience`,
    `<span class="command">Shell:</span>${SPACE.repeat(7)}${personalInfo.role}`,
    `<span class="command">Theme:</span>${SPACE.repeat(7)}${personalInfo.tagline}`,
    `<span class="command">Terminal:</span>${SPACE.repeat(4)}Portfolio v1.0.0`,
    `<span class="command">Packages:</span>${SPACE.repeat(4)}${Object.values(skills).flat().length} (npm)`,
    "",
    `<span style="background:#262626;color:#e5e5e5">${SPACE}${SPACE}${SPACE}</span><span style="background:#404040;color:#e5e5e5">${SPACE}${SPACE}${SPACE}</span><span style="background:#525252;color:#e5e5e5">${SPACE}${SPACE}${SPACE}</span><span style="background:#737373;color:#0a0a0a">${SPACE}${SPACE}${SPACE}</span><span style="background:#a3a3a3;color:#0a0a0a">${SPACE}${SPACE}${SPACE}</span><span style="background:#d4d4d4;color:#0a0a0a">${SPACE}${SPACE}${SPACE}</span>`,
    "",
  ];
}

export function getRepo(): CommandOutput {
  return [
    "",
    "Opening GitHub repository...",
    "",
  ];
}

export function processCommand(input: string): { output: CommandOutput; action?: string } {
  const command = input.toLowerCase().trim();

  switch (command) {
    case "help":
      return { output: getHelp() };
    case "about":
      return { output: getAbout() };
    case "skills":
      return { output: getSkills() };
    case "shopify":
      return { output: getShopify() };
    case "projects":
      return { output: getProjects() };
    case "experience":
      return { output: getExperience() };
    case "education":
      return { output: getEducation() };
    case "certifications":
      return { output: getCertifications() };
    case "contact":
      return { output: getContact() };
    case "whoami":
      return { output: getWhoami() };
    case "neofetch":
      return { output: getNeofetch() };
    case "banner":
      return { output: getBanner() };
    case "repo":
      return { output: getRepo(), action: "repo" };
    case "clear":
      return { output: [], action: "clear" };
    case "":
      return { output: [] };
    default:
      return {
        output: [
          "",
          `Command not found: <span class="command">'${command}'</span>`,
          `Type <span class="command">'help'</span> for a list of available commands.`,
          "",
        ],
      };
  }
}
