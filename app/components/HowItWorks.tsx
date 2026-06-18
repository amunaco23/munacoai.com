"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a paid discovery session",
    price: "$199/hour",
    details: null,
  },
  {
    number: "02",
    title: "Identify opportunities",
    price: null,
    details: ["Workflows", "Systems", "Bottlenecks", "Existing tools"],
  },
  {
    number: "03",
    title: "Receive recommendations",
    price: null,
    details: ["Quick wins", "Medium-term projects", "Implementation roadmap"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-28 px-6 relative">
      {/* Subtle divider glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,120,0,0.3), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#ff8a00" }}>
            Engagement Model
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            How it works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,120,0,0.2), rgba(255,120,0,0.2), transparent)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="glass rounded-3xl p-8 relative"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="text-xs font-bold tracking-widest mb-6 w-10 h-10 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(255,120,0,0.1)",
                  color: "#ff8a00",
                  border: "1px solid rgba(255,120,0,0.25)",
                }}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              {step.price && (
                <p className="text-2xl font-bold gradient-text">{step.price}</p>
              )}
              {step.details && (
                <ul className="mt-2 space-y-1.5">
                  {step.details.map((d) => (
                    <li key={d} className="text-sm flex items-center gap-2" style={{ color: "#8a8a8a" }}>
                      <span style={{ color: "#ff8a00" }}>—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
