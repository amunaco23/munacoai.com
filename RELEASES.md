# MunacoAI — Releases

## November 13, 2026 — AM Favicon
**Shipped:** 10:25 AM CT

### What shipped
- Browser tab and home-screen icon is now the AM circle logo (same as anthonymunaco.com)

### Stack
- Added app/icon.png and app/apple-icon.png; removed the default app/favicon.ico

## November 13, 2026 — V2: Minimal Redesign
**Shipped:** 10:15 AM CT

### What shipped
- Redesigned to match anthonymunaco.com: white/neutral palette, Inter, max-w-2xl single column, automatic dark mode
- Cut to one short page: headline, What I Do (Identify / Prioritize / Build), $199/hour engagement + Book a discovery call, footer
- Removed the Hyperspeed background, glass cards, How It Works, and Availability sections
- AM circle logo top-left (same as anthonymunaco.com, links there); footer links there too

### Stack
- Removed dependencies: framer-motion, three, postprocessing, @types/three
- Added app/components/AnimateIn.tsx (shared scroll fade-in from anthonymunaco.com)
- Deleted Nav, Hero, WhatIDo, HowItWorks, Availability, FinalCTA, Hyperspeed components

## June 18, 2026 — V1: Initial Landing Page
**Shipped:** 1:00 PM CT

### What shipped
- Full 5-section landing page: Hero, What I Do, How It Works, Availability, Final CTA
- Dark luxury aesthetic with orange/red gradients and glassmorphism cards
- Framer Motion animations: hero stagger, card entrances, availability sequential reveal, CTA glow pulse
- Dynamic availability table (auto-calculates next 8 weeks from current date)
- Fully responsive — mobile-first with stacked availability cards
- Sticky glass nav with Book Call CTA
- All CTAs point to placeholder `#` (ready to swap in Calendly/SavvyCal URL)

### Stack
- Next.js 16.2.9 (App Router) · TypeScript · Tailwind CSS · Framer Motion
- Hosted: GitHub (amunaco23/munacoai.com) + Vercel (munacoaicom.vercel.app)
- New files: app/components/{Nav,Hero,WhatIDo,HowItWorks,Availability,FinalCTA}.tsx
