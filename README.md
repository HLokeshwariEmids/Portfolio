# Lokeshwari Hukumathirao — Portfolio

Premium personal portfolio built with **Next.js 14 (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Positioned for an **AI Engineer & Full-Stack Engineer** working in production AI — agentic systems, RAG / GraphRAG, healthcare AI, and cloud-native applications.

---

## ✨ What's inside

- **Hero** with animated AI system architecture visualization (SVG, no heavy 3D)
- **Credential strip** with real metrics from your resume
- **About / Engineering philosophy** — two-column editorial layout
- **Experience timeline** with animated rail and current-role indicator
- **Featured projects** — case-study cards with problem / solution / architecture / impact
- **Full case-study pages** at `/projects/[slug]` — generated statically
- **Interactive "How I build AI systems"** layered architecture (click layers for tools)
- **Skills bento grid** (no fake proficiency %)
- **Certifications** grid
- **Education** with primary + secondary layout
- **Contact** form + direct email/LinkedIn cards
- **Sticky floating navigation** with active-section pill, mobile menu
- **SEO**: metadata, sitemap, robots
- **Accessibility**: semantic HTML, focus states, `prefers-reduced-motion`
- **Dark-first** design with subtle indigo → violet → cyan accents
- **No fake data** — every claim is sourced from your resume

---

## 🚀 Getting started

```bash
# 1. install
npm install

# 2. run dev
npm run dev
# → http://localhost:3000

# 3. production build
npm run build
npm start
```

Requires Node.js 18.17+ (Node 20 recommended).

---

## 📁 Project structure

```
.
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Home page composition
│   ├── globals.css             # Design tokens, utilities
│   ├── sitemap.ts              # Auto-generated sitemap
│   └── projects/[slug]/
│       └── page.tsx            # Dynamic case-study pages
│
├── components/
│   ├── Navbar.tsx              # Sticky floating nav + mobile menu
│   ├── Hero.tsx                # Hero copy + CTAs
│   ├── HeroVisual.tsx          # Animated AI system SVG diagram
│   ├── CredentialStrip.tsx     # Metric strip below hero
│   ├── About.tsx               # Engineering philosophy
│   ├── Experience.tsx          # Timeline
│   ├── FeaturedProjects.tsx    # Case-study cards
│   ├── AIArchitecture.tsx      # Interactive layered architecture
│   ├── Skills.tsx              # Bento skills grid
│   ├── Certifications.tsx      # Cert cards
│   ├── Education.tsx           # Education section
│   ├── Contact.tsx             # Contact form + links
│   ├── Footer.tsx              # Footer
│   └── BackgroundEffects.tsx   # Grid + radial glows
│
├── data/                       # 🔧 EDIT THESE TO UPDATE CONTENT
│   ├── site.ts                 # Personal info, email, LinkedIn, resume URL
│   ├── experience.ts           # Work experience
│   ├── projects.ts             # Projects (add githubUrl / liveUrl here)
│   ├── skills.ts               # Skill groups
│   └── credentials.ts          # Certifications + education
│
├── lib/
│   └── utils.ts                # cn() helper
│
├── public/
│   ├── resume.pdf              # 📥 PUT YOUR RESUME HERE
│   └── robots.txt
│
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

---

## 📝 Where to update content

Everything lives in `data/`. UI and content are separated on purpose.

| I want to update…                             | Edit                            |
| --------------------------------------------- | ------------------------------- |
| Name, email, LinkedIn, tagline                | `data/site.ts`                  |
| Work experience                               | `data/experience.ts`            |
| Projects (title, problem, stack, arch, impact) | `data/projects.ts`              |
| **Project GitHub / live demo links**          | `data/projects.ts` → `githubUrl`, `liveUrl` |
| Skills (add/remove/reorder)                   | `data/skills.ts`                |
| Certifications                                | `data/credentials.ts`           |
| Education                                     | `data/credentials.ts`           |
| SEO title/description                         | `app/layout.tsx`                |
| Domain in sitemap                             | `app/sitemap.ts`                |

---

## 📄 Adding your resume

Save your resume as `public/resume.pdf`. The Download Resume buttons in the hero, navbar, and mobile menu will link to it automatically.

---

## 🔗 Adding project GitHub / live links

In `data/projects.ts`, each project can take optional `githubUrl` and `liveUrl` fields:

```ts
{
  slug: "prior-authorization-automation",
  // …
  githubUrl: "https://github.com/you/your-repo",
  liveUrl: "https://your-demo.com",
}
```

Case-study pages will render buttons automatically. If both are omitted, an "Enterprise · Confidential" badge shows instead.

---

## 🔗 Updating LinkedIn / email

In `data/site.ts`:

```ts
email: "hlokeshwari14@gmail.com",
linkedin: "https://linkedin.com/in/lokeshwari-hukumathirao",
```

These flow to the hero, contact section, footer, and mailto links everywhere.

---

## ✉️ Wiring up the contact form

The form is currently front-end only. To make it actually send:

**Option A — Formspree** (fastest):

1. Get an endpoint at [formspree.io](https://formspree.io).
2. In `components/Contact.tsx`, replace `handleSubmit` with:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setState("sending");
  await fetch("https://formspree.io/f/YOUR_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(form),
  });
  setState("sent");
};
```

**Option B — Resend + Next.js API route**:

1. Create `app/api/contact/route.ts` with a `POST` handler that uses [Resend](https://resend.com).
2. POST from the form to `/api/contact`.

---

## 🚀 Deploying to Vercel

The fastest path:

```bash
# push to GitHub first
git init
git add .
git commit -m "portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Then:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Vercel auto-detects Next.js — just click **Deploy**
4. Add your custom domain in **Project → Settings → Domains**

Update the domain in two places once you have it:

- `app/layout.tsx` → `metadataBase`
- `app/sitemap.ts` → `base`
- `public/robots.txt` → `Sitemap:` URL

---

## 🎨 Design system

Everything is tokenized via Tailwind (`tailwind.config.ts`) and CSS variables (`app/globals.css`).

- **Colors**: near-black background, refined indigo / violet / cyan accents
- **Typography**: Inter (display + body) + JetBrains Mono (technical labels)
- **Spacing**: consistent section rhythm (`py-24 md:py-36`)
- **Cards**: `.card`, `.card-hover`, `.glow-border` utility classes
- **Buttons**: `.btn-primary`, `.btn-secondary`

---

## ♿ Accessibility & performance

- Semantic HTML, proper heading hierarchy
- Keyboard-navigable
- Visible focus states
- `prefers-reduced-motion` respected (all animations disable cleanly)
- No heavy 3D/WebGL — animations are SVG + Framer Motion
- Static case-study pages via `generateStaticParams`
- Fonts loaded via `next/font` (self-hosted, no layout shift)

---

## 📜 License

Personal portfolio — feel free to fork the structure, but the content, copy, and identity are Lokeshwari's.
