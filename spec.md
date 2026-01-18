# CREATIVE TECHNOLOGIST PORTFOLIO
**Project Name:** Portfolio 2026
**Created:** January 18, 2026
**Status:** Draft

---

## 1. OVERVIEW
**What is this?**
A modern portfolio site showcasing creative technology work using an interactive Bento Grid layout.

**Who is it for?**
Potential clients, collaborators, and employers looking to understand my work and capabilities.

**Why does it exist?**
To establish professional presence, demonstrate technical/creative skills, and generate inbound opportunities.

---

## 2. CORE FEATURES

### Feature 1: Bento Grid Homepage
**User Flow:**
- User lands on homepage
- Sees dynamic Bento Grid with project cards in varying sizes
- Cards animate on hover (subtle scale/glow effects)
- Grid is responsive (stacks on mobile, 2-col on tablet, full grid on desktop)

**Requirements:**
- [ ] Implement Bento Grid layout with Tailwind Grid
- [ ] Support 3 card sizes: small (1x1), medium (2x1), large (2x2)
- [ ] Smooth hover animations (scale 1.02, glow effect)
- [ ] Fully responsive breakpoints
- [ ] Each card links to project detail or external work

### Feature 2: Project Showcase Cards
**User Flow:**
- Each card displays: thumbnail/video, project title, tech tags
- User clicks card to view project details
- Modal or dedicated page shows full project info

**Requirements:**
- [ ] Card component with image/video support
- [ ] Tech tags styled as pills (e.g., "Next.js", "AI", "3D")
- [ ] Click opens project detail view
- [ ] Support for external links (opens new tab)
- [ ] Lazy load images for performance

### Feature 3: About/Contact Section
**User Flow:**
- User scrolls to About section (below grid)
- Sees bio, skills, social links
- Contact CTA leads to email or contact form

**Requirements:**
- [ ] Bio section with photo
- [ ] Skill tags/categories
- [ ] Social links (GitHub, LinkedIn, Twitter/X)
- [ ] Contact button (mailto: or simple form)

### Feature 4: Project Detail Pages
**User Flow:**
- User clicks a project card
- Routed to `/project/[slug]` page
- Sees: hero image, description, tech stack, role, images/videos, live link, GitHub link

**Requirements:**
- [ ] Dynamic route: /project/[slug]
- [ ] Markdown support for project descriptions
- [ ] Image gallery component
- [ ] Embedded video support (YouTube/Vimeo)
- [ ] CTA buttons (View Live, View Code)

### Feature 5: Dark Mode
**User Flow:**
- User clicks theme toggle in header
- Site switches between light/dark mode
- Preference saved to localStorage

**Requirements:**
- [ ] Toggle button in header (sun/moon icon)
- [ ] Dark mode Tailwind classes applied
- [ ] Persist preference in localStorage
- [ ] Smooth transition between modes

---

## 3. DATA MODEL

### Entity: Project
```
- id: uuid (primary key)
- slug: string (unique, URL-friendly)
- title: string
- description: text (markdown)
- thumbnail: string (URL to image)
- video_url: string (optional, YouTube/Vimeo embed)
- tech_stack: string[] (array of tech names)
- role: string (e.g., "Solo Developer", "Frontend Lead")
- live_url: string (optional)
- github_url: string (optional)
- grid_size: enum ('small', 'medium', 'large')
- order: integer (for sorting)
- featured: boolean
- created_at: timestamp
- updated_at: timestamp
```

### Entity: Media (optional, if multiple images per project)
```
- id: uuid
- project_id: uuid (foreign key)
- url: string
- type: enum ('image', 'video')
- order: integer
```

**Relationships:**
- Project has many Media items

---

## 4. PAGES/ROUTES

| Route | Purpose | Auth Required? |
|-------|---------|----------------|
| `/` | Homepage with Bento Grid | No |
| `/about` | Extended bio/resume | No |
| `/project/[slug]` | Project detail page | No |
| `/api/projects` | Fetch all projects | No |
| `/api/projects/[id]` | Fetch single project | No |

**Admin Routes (Optional for v1, can add later):**
| `/admin` | Project management dashboard | Yes |
| `/admin/projects/new` | Create new project | Yes |

---

## 5. DESIGN/UI NOTES

**Visual Style:**
- Modern, minimal, high-contrast
- Dark mode default with light mode option
- Accent color: Cyan/Blue (#00D9FF) for CTAs and highlights
- Typography: Inter or Geist Sans (clean, modern sans-serif)
- Animations: Subtle, performant (no jank)

**Layout:**
- Desktop: 4-column grid with varying card sizes
- Tablet: 2-column grid
- Mobile: Single column stack

**Bento Grid Pattern:**
```
[Large 2x2] [Med 2x1] [Small] [Small]
[Med 2x1]   [Small]   [Large 2x2]
[Small]     [Small]   [Med 2x1]
```

**Components Needed:**
- Header (logo, nav, theme toggle)
- BentoGrid (container)
- ProjectCard (displays in grid)
- ProjectDetail (full page view)
- TechTag (pill-style badge)
- Footer (social links, copyright)

**Inspiration/References:**
- https://bento.me (grid layout)
- https://leerob.io (clean portfolio)
- https://rauno.me (interactive elements)

---

## 6. TECH REQUIREMENTS

**Frontend:**
- Next.js 15 (App Router)
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (icons)
- next/image (optimized images)
- react-markdown (project descriptions)

**Backend:**
- Supabase (PostgreSQL for projects data)
- Drizzle ORM
- Supabase Storage (for images/videos)

**Third-Party:**
- [ ] Analytics: Vercel Analytics (built-in)
- [ ] Forms: Resend (for contact form, optional)
- [ ] Video: YouTube/Vimeo embeds (no hosting needed)

**Optional (v2):**
- [ ] CMS: Add admin panel with Supabase Auth
- [ ] Search: Add project search/filter

---

## 7. SUCCESS CRITERIA

- [ ] Bento Grid renders correctly on all screen sizes
- [ ] At least 6 projects loaded and displayed
- [ ] All project detail pages functional
- [ ] Page loads in < 2 seconds (Lighthouse score 90+)
- [ ] Dark mode works and persists
- [ ] Deployed to custom domain via Vercel
- [ ] Mobile-friendly (passes Mobile-Friendly Test)

---

## 8. OUT OF SCOPE (v1)

- Blog/writing section (add later if needed)
- Admin dashboard (manually add projects via Supabase UI for now)
- Advanced animations (keep it simple for launch)
- Multi-language support
- Project categories/filtering (just show all projects initially)
- Comments or social features

---

## 9. OPEN QUESTIONS

- [ ] Use Supabase or local JSON for initial project data? (Decision: Start with local JSON, migrate to Supabase after 5+ projects)
- [ ] Modal or dedicated page for project details? (Decision: Dedicated pages for SEO)
- [ ] Video autoplay on hover or click to play? (Decision: Click to play, autoplay is annoying)

---

## 10. IMPLEMENTATION PLAN

**Phase 1: Foundation** (Day 1-2)
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Set up Tailwind CSS + Framer Motion
- [ ] Create basic layout (Header, Footer)
- [ ] Implement dark mode toggle with localStorage

**Phase 2: Bento Grid** (Day 3-4)
- [ ] Build BentoGrid component with Tailwind Grid
- [ ] Create ProjectCard component (3 size variants)
- [ ] Add hover animations
- [ ] Make responsive (mobile, tablet, desktop)
- [ ] Load sample projects from local JSON

**Phase 3: Project Pages** (Day 5-6)
- [ ] Set up dynamic routes: /project/[slug]
- [ ] Build ProjectDetail component
- [ ] Add markdown rendering
- [ ] Implement image gallery
- [ ] Add CTA buttons (Live, Code)

**Phase 4: Content & Polish** (Day 7)
- [ ] Add real project data
- [ ] Write project descriptions
- [ ] Add About section
- [ ] Optimize images (WebP, next/image)
- [ ] Final responsive tweaks

**Phase 5: Deploy** (Day 8)
- [ ] Set up Vercel project
- [ ] Configure environment variables
- [ ] Connect custom domain (if ready)
- [ ] Test production build
- [ ] Launch 🚀

**Optional Phase 6: Supabase Migration** (Later)
- [ ] Set up Supabase project
- [ ] Create projects table with Drizzle
- [ ] Migrate JSON data to database
- [ ] Update API routes to fetch from Supabase

---

## NOTES

**Initial Projects to Feature:**
1. [Project Name] - [Brief description]
2. [Project Name] - [Brief description]
3. [Project Name] - [Brief description]
4. [Project Name] - [Brief description]
5. [Project Name] - [Brief description]
6. [Project Name] - [Brief description]

**Performance Considerations:**
- Use next/image for all images
- Lazy load off-screen cards
- Preload critical fonts
- Minimize initial JS bundle (use Server Components where possible)

**Accessibility:**
- Semantic HTML
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Focus indicators on interactive elements
