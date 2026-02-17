# TradingOctopus Frontend

Landing page and web application for [tradingoctopus.com](https://tradingoctopus.com).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (dark theme, custom ocean/teal palette)

## Getting Started

```bash
npm install
npm run dev
```

The development server starts on [http://localhost:6002](http://localhost:6002).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 6002) |
| `npm run build` | Create production build |
| `npm run start` | Start production server (port 6002) |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
  app/
    layout.tsx       # Root layout with metadata and fonts
    page.tsx         # Landing page (composes sections)
    not-found.tsx    # Custom 404 page
    globals.css      # Tailwind directives and custom utilities
    icon.svg         # Favicon
  components/
    Hero.tsx         # Hero section with CTA
    Features.tsx     # Feature grid (6 platform capabilities)
    ComingSoon.tsx   # Roadmap and email signup
    Footer.tsx       # Site footer with navigation
```
