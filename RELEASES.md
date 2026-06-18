# MunacoAI — Releases

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
