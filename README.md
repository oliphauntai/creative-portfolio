# Creative Technologist Portfolio

Modern portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/app
  /about         - About page
  layout.tsx     - Root layout with theme provider
  page.tsx       - Homepage
  globals.css    - Global styles
/components
  header.tsx     - Header with navigation and theme toggle
  footer.tsx     - Footer with social links
/lib
  theme-provider.tsx - Dark mode context provider
```

## Features

- ✅ Dark mode with localStorage persistence
- ✅ Responsive navigation
- ✅ Modern UI with Tailwind CSS
- ✅ TypeScript strict mode
- ✅ Optimized for performance

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.
