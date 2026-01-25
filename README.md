# Yan Pantoja - Developer Portfolio

A unique developer portfolio featuring **dual display modes**: an interactive terminal interface and a traditional portfolio view. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Features

- **Dual Mode System** - Toggle between Terminal and Portfolio views
- **Interactive Terminal** - Fully functional CLI with commands (`help`, `about`, `skills`, `projects`, etc.)
- **Persistent Mode** - User preference saved in localStorage
- **Responsive Design** - Optimized for desktop and mobile
- **Dark Theme** - Monospace-first aesthetic with terminal vibes
- **Accessibility** - ARIA labels, keyboard navigation, reduced motion support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: IBM Plex Mono
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yanpantoja/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Customization

All portfolio content is centralized in a single file for easy customization:

### Edit Your Information

Open `src/data/portfolio.ts` and update:

```typescript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  tagline: "Your Tagline",
  bio: "Your bio...",
  location: "Your Location",
  email: "your@email.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  },
};

export const skills = { /* ... */ };
export const projects = [ /* ... */ ];
export const experience = [ /* ... */ ];
export const education = [ /* ... */ ];
```

### Terminal Commands

Available commands in terminal mode:
- `help` - List all commands
- `about` - About me
- `skills` - Technical skills
- `projects` - Project showcase
- `experience` - Work history
- `education` - Academic background
- `contact` - Contact information
- `neofetch` - System info style display
- `clear` - Clear terminal
- `banner` - Show welcome banner

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with fonts
│   ├── page.tsx          # Main page with mode switching
│   └── globals.css       # Global styles and theme
├── components/
│   ├── Terminal.tsx      # Terminal mode component
│   └── portfolio/        # Portfolio mode components
│       ├── Portfolio.tsx # Main wrapper with header
│       ├── Hero.tsx      # Hero section
│       ├── About.tsx     # About section
│       ├── Skills.tsx    # Skills grid
│       ├── Projects.tsx  # Projects showcase
│       ├── Experience.tsx# Work timeline
│       └── Contact.tsx   # Contact section
├── data/
│   └── portfolio.ts      # All portfolio content
└── lib/
    ├── commands.ts       # Terminal command handlers
    └── usePersistedMode.ts # Mode persistence hook
```

## Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yanpantoja/portfolio)

### Other Platforms

```bash
# Build for production
npm run build

# The output will be in .next folder
# Deploy to any Node.js hosting platform
```

## License

MIT License - feel free to use this template for your own portfolio.

## Author

**Yan Pantoja**
- GitHub: [@yanpantoja](https://github.com/yanpantoja)
- LinkedIn: [/in/yanpantoja](https://linkedin.com/in/yanpantoja)
- Email: yanmpantoja@gmail.com
