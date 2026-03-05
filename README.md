# Hafis Abdul Rasak Portfolio (Next.js + TypeScript + Tailwind)

Professional, responsive portfolio website for **Hafis Abdul Rasak**.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev       # start development server
npm run build     # production build
npm run start     # run production build
npm run lint      # run ESLint
npm run typecheck # TypeScript checks
```

## Edit portfolio content

All site content is centralized in:

- `data/profile.ts`

Update this file to edit summary, skills, projects, certifications, services, testimonials, and contact links.

## Replace the CV PDF

1. Prepare your updated CV file.
2. Replace:
   - `public/Hafis-Abdul-Rasak-CV.pdf`
3. Keep the same filename so the **Download CV** button continues to work.

## Deploy on Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `npm run build`
5. Output: default (`.next` managed by Vercel).
6. Deploy.

## Routes

- `/` Home (single-page sections)
- `/projects` Projects with tags filter
- `/experience` Full timeline
- `/contact` Contact page + frontend form validation
