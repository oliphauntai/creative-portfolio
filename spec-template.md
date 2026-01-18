# PROJECT SPEC TEMPLATE
**Project Name:** [Your Project Name]
**Created:** [Date]
**Status:** Draft | In Progress | Complete

---

## 1. OVERVIEW
**What is this?**
[One sentence description of what you're building]

**Who is it for?**
[Target user/audience]

**Why does it exist?**
[The problem this solves or value it provides]

---

## 2. CORE FEATURES
List the essential features in priority order. Keep it to 3-5 core features for v1.

### Feature 1: [Name]
**User Flow:**
- User does X
- System responds with Y
- User sees Z

**Requirements:**
- [ ] Specific requirement 1
- [ ] Specific requirement 2
- [ ] Specific requirement 3

### Feature 2: [Name]
**User Flow:**
- Step 1
- Step 2
- Step 3

**Requirements:**
- [ ] Requirement 1
- [ ] Requirement 2

### Feature 3: [Name]
[Continue pattern...]

---

## 3. DATA MODEL
What data needs to be stored?

### Entity 1: [e.g., User]
```
- id: uuid (primary key)
- email: string (unique)
- name: string
- created_at: timestamp
```

### Entity 2: [e.g., Post]
```
- id: uuid (primary key)
- user_id: uuid (foreign key)
- title: string
- content: text
- published: boolean
- created_at: timestamp
```

**Relationships:**
- User has many Posts
- Post belongs to User

---

## 4. PAGES/ROUTES
Map out the URL structure and what each page does.

| Route | Purpose | Auth Required? |
|-------|---------|----------------|
| `/` | Landing page | No |
| `/dashboard` | User dashboard | Yes |
| `/login` | Authentication | No |
| `/api/posts` | CRUD operations | Yes |

---

## 5. DESIGN/UI NOTES
**Visual Style:**
- [Color scheme, typography, general aesthetic]

**Layout:**
- [Desktop/mobile considerations, grid structure]

**Components Needed:**
- Header/Nav
- Footer
- [Feature-specific components]

**Inspiration/References:**
- [Link to design references if any]

---

## 6. TECH REQUIREMENTS
**Frontend:**
- Next.js 15 (App Router)
- Tailwind CSS
- [Any specific libraries]

**Backend:**
- Supabase (PostgreSQL)
- Drizzle ORM
- [Any specific integrations]

**Third-Party:**
- [ ] Authentication (Supabase Auth)
- [ ] Analytics (if needed)
- [ ] Payment processing (if needed)
- [ ] Email service (if needed)

---

## 7. SUCCESS CRITERIA
What does "done" look like?

- [ ] All core features implemented and working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Deployed to production
- [ ] [Specific metric or goal]

---

## 8. OUT OF SCOPE (v1)
What are we explicitly NOT building in the first version?

- Feature X (save for v2)
- Integration Y (not needed yet)
- Advanced feature Z (too complex for MVP)

---

## 9. OPEN QUESTIONS
Questions that need answering before/during development:

- [ ] Question 1?
- [ ] Question 2?
- [ ] Question 3?

---

## 10. IMPLEMENTATION PLAN
Break down into phases if needed.

**Phase 1: Foundation** (Week 1)
- Set up Next.js project
- Configure Supabase
- Build basic layout

**Phase 2: Core Features** (Week 2)
- Implement Feature 1
- Implement Feature 2

**Phase 3: Polish & Deploy** (Week 3)
- UI refinements
- Testing
- Deploy to Vercel

---

## NOTES
[Any additional context, constraints, or considerations]
