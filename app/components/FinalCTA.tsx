"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(255,90,0,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2
            className="font-bold tracking-tight text-white leading-tight"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            Ready to find your biggest
            <br />
            <span className="gradient-text">AI opportunities?</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "#d1d1d1" }}
        >
          Book a paid discovery session and leave with a clear roadmap.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 text-2xl font-bold gradient-text"
        >
          $199/hour
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="#"
            className="inline-block px-10 py-5 rounded-2xl text-white font-semibold text-xl transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #ff8a00, #ff5e00, #d72600)",
              boxShadow: "0 0 40px rgba(255,120,0,0.35), 0 4px 30px rgba(0,0,0,0.5)",
              animation: "glowPulse 8s ease infinite",
            }}
          >
            Book a Call
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-sm"
          style={{ color: "#8a8a8a" }}
        >
          One-on-one · Practical · Focused on your business
        </motion.p>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 text-center"
        style={{ color: "#3a3a3a" }}
      >
        <p className="text-sm">© 2026 MunacoAI · munacoai.com</p>
      </motion.div>
    </section>
  );
}
