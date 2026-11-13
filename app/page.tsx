import Image from "next/image";
import AnimateIn from "./components/AnimateIn";

const services = [
  { label: "Identify", copy: "Find where repetitive work and manual processes are costing you time and money." },
  { label: "Prioritize", copy: "Separate real AI opportunities from hype and focus on what actually moves the needle." },
  { label: "Build", copy: "Implement automations, workflows, and AI tools inside your business." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">

      {/* Nav */}
      <nav className="w-full max-w-2xl mx-auto px-6 py-6 flex items-center justify-between animate-fade-up opacity-0" style={{ animationDelay: "0ms" }}>
        <a href="https://anthonymunaco.com" target="_blank" rel="noopener noreferrer" aria-label="Anthony Munaco">
          <Image src="/logos/amdark.png" alt="Anthony Munaco" width={48} height={48} className="h-9 w-auto dark:invert" priority />
        </a>
        <a
          href="https://calendly.com/amunaco/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        >
          Book a call ↗
        </a>
      </nav>

      <div className="w-full max-w-2xl mx-auto px-6">

        {/* Hero */}
        <section className="mt-8 md:mt-16">
          <h1 className="text-[28px] md:text-5xl font-semibold leading-[1.2] tracking-tight animate-fade-up opacity-0" style={{ animationDelay: "100ms" }}>
            Hire an AI operator.
          </h1>
          <p className="mt-5 text-[15px] md:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 animate-fade-up opacity-0 max-w-lg" style={{ animationDelay: "200ms" }}>
            I&apos;ll find where AI fits in your business and build the solutions that save you time and money.
          </p>
        </section>

        {/* Services */}
        <AnimateIn className="mt-14 md:mt-20" delay={0}>
          <section>
            <p className="text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-7">
              What I Do
            </p>
            <div className="space-y-6">
              {services.map(({ label, copy }) => (
                <div key={label} className="flex gap-6">
                  <span className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100 w-20 shrink-0 pt-px">{label}</span>
                  <p className="text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">{copy}</p>
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* Pricing + CTA */}
        <AnimateIn className="mt-14 md:mt-20" delay={50}>
          <section>
            <p className="text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-7">
              Engagement
            </p>
            <p className="text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-sm">
              One-on-one discovery sessions at <span className="font-semibold text-neutral-900 dark:text-neutral-100">$199/hour</span>. You leave with a clear picture of where AI fits and what to build first.
            </p>
            <a
              href="https://calendly.com/amunaco/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
            >
              Book a discovery call
              <span>↗</span>
            </a>
          </section>
        </AnimateIn>

      </div>

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto px-6 mt-16 pb-10">
        <AnimateIn>
          <div className="border-t border-neutral-100 dark:border-neutral-800 pt-8 flex flex-row items-center justify-between gap-2 text-xs sm:text-sm text-neutral-400 dark:text-neutral-500">
            <span>munacoai.com</span>
            <a
              href="https://anthonymunaco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Anthony Munaco ↗
            </a>
          </div>
        </AnimateIn>
      </footer>

    </main>
  );
}
