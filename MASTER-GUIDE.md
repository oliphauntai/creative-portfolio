# THE 2026 AI MASTER GUIDE
**Version:** 1.0 (January 2026)
**Owner:** [Your Name]
**Objective:** Transition from "Consumer" to "Autonomous Builder/Founder."

---

## I. THE PHILOSOPHY (MINDSET)

### 1. Situational Awareness
* **The Shift:** We are no longer writing code line-by-line. We are orchestrating logic. The bottleneck is no longer syntax; it is *clarity of thought*.
* **The Goal:** Do not "Vibe Code" (blindly asking AI to write code). **"Vibe Business"** (ask for outcomes, manage the architecture).
* **The "Super IC":** The most valuable career path in 2026 is the "Super Individual Contributor"—one person acting as a full 5-person product team (Product, Design, Frontend, Backend, DevOps) using AI leverage.

### 2. The Business Model: "Service-as-Software"
* Move away from bloated SaaS.
* Build lightweight, purpose-built tools that solve specific, high-value problems ("Atoms").
* **Metric:** Speed to deployment is the only metric that matters.

---

## II. THE 2026 TECH STACK (ARCHITECTURE)

When starting a new project, this is the **Standard Default**:

* **Frontend:** Next.js 15 (App Router) + Tailwind CSS + Lucide React (Icons).
* **Backend:** Supabase (PostgreSQL) + Drizzle ORM (for type-safe database calls).
* **AI Integration:** Vercel AI SDK (standardized API for LLMs).
* **Auth:** Supabase Auth or Clerk.
* **Deployment:** Vercel (Zero-config deployment).

**Rule:** *Never reinvent the wheel. Use these defaults to ship in hours, not weeks.*

---

## III. THE TOOLING (ENVIRONMENT)

### 1. The Engine: Cursor
* **Role:** The "Integrated Development Environment" (IDE).
* **Key Mode:** **Composer (`Cmd + I`)** - Used for multi-file edits and building entire features at once.
* **Configuration:**
    * *Tab Key:* Set to "Smart" (Auto-complete).
    * *Rules:* Always use a `.cursorrules` file (see Section V).
    * *Terminal:* Always launch via `cursor .` from the terminal.

### 2. The Pilot: Claude Code (CLI)
* **Role:** The "Autonomous Engineer." Runs in the terminal.
* **Usage:**
    * Use for: "Refactor this entire folder," "Fix this complex bug across 5 files," or "Set up the database connection."
    * *Command:* `claude` (in terminal).
    * *Workflow:* `/teleport` allows you to pull browser plans into the terminal.

### 3. The Designer: V0 / Lovable
* **Role:** "Generative UI."
* **Usage:**
    * Do not write CSS manually.
    * Prompt the interface in V0.dev -> Copy code -> Paste into Cursor.

### 4. The Brain: Claude Projects (Browser)
* **Role:** The "Project Manager" & "Memory."
* **Usage:** Holds the master context (this guide, API docs, brand voice). Always start big architectural plans here before coding.

---

## IV. THE PROTOCOLS (WORKFLOWS)

### Protocol A: The "Manager Workflow" (Building Features)
Instead of diving into code, act as the PM first.
1.  **Draft:** Create a `spec.md` file in your project folder.
2.  **Describe:** Write plain English requirements ("The user should be able to log in, see a dashboard, and upload a PDF").
3.  **Prompt:** Open Cursor Composer (`Cmd + I`) and type: *"Read spec.md and implement the first feature."*
4.  **Review:** Watch the diffs. Accept or Reject.

### Protocol B: The "Repair" Loop (Fixing Bugs)
1.  **Identify:** You see an error in the terminal (e.g., "Error: 500").
2.  **Isolate:** Don't guess.
3.  **Act:**
    * *Option 1 (Cursor):* Click "Add to Chat" on the error in terminal -> "Fix this."
    * *Option 2 (Browser Extension):* Open Vercel dashboard -> Click Claude Extension -> "Why did this deployment fail?"

### Protocol C: The "Ship" Loop (Deployment)
1.  **Commit:** `git add .` -> `git commit -m "update"` -> `git push`.
2.  **Deploy:** Vercel automatically picks up the push.
3.  **Verify:** Check the live URL.

---

## V. SYSTEM INSTRUCTIONS (THE "NO-FLUFF" PROMPTS)

**Copy this into your `.cursorrules` file or Claude Project Instructions:**

```text
YOU ARE A SENIOR STAFF ENGINEER.
1.  **No Fluff:** Do not explain "Here is the code." Just give me the code.
2.  **No Placeholders:** Never leave comments like "// insert logic here." Write the full, working implementation.
3.  **Tech Stack:** Always use Next.js 15, Tailwind, and TypeScript unless told otherwise.
4.  **Planning:** If a task involves more than 2 files, propose a plan in bullet points first.
5.  **Thinking:** Use First Principles. If I ask for something stupid, correct me.
6.  **Style:** Prefer modular, clean code over clever "one-liners."