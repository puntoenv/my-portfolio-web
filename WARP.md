# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Sebastian Peralta, built with Astro and TypeScript. The site showcases professional experience, education, skills, and projects with a modern, responsive design using Tailwind CSS.

## Development Commands

### Core Commands
- `bun dev` or `bun start` - Start development server
- `bun run build` - Build for production (includes type checking)
- `bun run preview` - Preview production build locally

### Type Checking
- `bun run astro check` - Run TypeScript type checking

## Architecture

### Project Structure
```
src/
├── components/          # Astro components organized by feature
│   ├── education/      # Education section
│   ├── experience/     # Work experience section
│   ├── footer/         # Site footer
│   ├── header/         # Navigation header
│   ├── home/           # Hero/banner section
│   ├── projects/       # Project showcase
│   ├── seo/            # SEO metadata
│   ├── skills/         # Skills display
│   └── ui/             # Reusable UI components
├── data/               # JSON data files
├── icons/              # Icon components
├── layouts/            # Page layouts
└── pages/              # Route pages
```

### Key Technologies
- **Astro 5.x** - Static site generator with component islands architecture
- **Tailwind CSS 4.x** - Utility-first CSS framework (configured via Vite plugin)
- **TypeScript** - Type safety with strictest configuration
- **Bun** - Package manager and runtime
- **Vercel Analytics & Speed Insights** - Performance monitoring

### Path Aliases
The project uses TypeScript path aliases configured in `tsconfig.json`:
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@pages/*` → `src/pages/*`
- `@icons/*` → `src/icons/*`
- `@data/*` → `src/data/*`

### Data Management
Content is managed through JSON files in `src/data/`:
- `experience.json` - Work experience data
- `education.json` - Educational background
- `projects.json` - Portfolio projects

### Styling Architecture
- **Global styles**: Defined in `src/layouts/Layout.astro`
- **Font**: JetBrains Mono monospace font
- **Theme**: Supports light/dark mode with automatic detection
- **Background**: Animated radial gradient background
- **Responsive**: Mobile-first responsive design

### Component Patterns
- **Section-based structure**: Each major section (Experience, Education, Skills) is a dedicated component
- **Data-driven**: Components consume JSON data files for content
- **Icon system**: Dedicated icon components in `src/icons/`
- **UI components**: Reusable components in `src/components/ui/`

### SEO & Analytics
- Custom SEO component for metadata management
- Vercel Analytics and Speed Insights integration
- Proper canonical URLs and Twitter card support
- Spanish language optimization

## Development Guidelines

### Component Creation
- Place feature-specific components in appropriate subdirectories under `src/components/`
- Use TypeScript interfaces for component props
- Follow the existing pattern of importing data from `@data/*`

### Adding New Sections
1. Create component in appropriate subdirectory
2. Add data file in `src/data/` if needed
3. Import and add to `src/pages/index.astro`
4. Update navigation in header if needed

### Styling Conventions
- Use Tailwind utility classes
- Follow mobile-first responsive design
- Maintain dark/light theme compatibility
- Use smooth scrolling for navigation

### Data Updates
- Modify JSON files in `src/data/` to update content
- Images should be placed in `public/` directory
- Use WebP format for images when possible
