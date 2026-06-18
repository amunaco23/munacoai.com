"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#060606]" />

      {/* Animated gradient orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[700px] h-[700px] rounded-full blur-[120px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, #ff8a00 0%, #ff5e00 40%, #d72600 70%, transparent 100%)",
            animation: "gradientShift 8s ease infinite",
            backgroundSize: "200% 200%",
          }}
        />
      </motion.div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1
            className="font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            AI isn&apos;t your problem.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h2
            className="font-bold leading-tight tracking-tight gradient-text mt-2"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Your bottlenecks are.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#d1d1d1" }}
        >
          I help businesses identify where AI can actually create value,
          prioritize opportunities, and implement practical solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="mt-6"
          style={{ color: "#8a8a8a" }}
        >
          <span className="text-2xl font-semibold" style={{ color: "#ff8a00" }}>
            $199
          </span>
          <span className="text-lg ml-1">/hour</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #ff8a00, #ff5e00, #d72600)",
              boxShadow: "0 0 30px rgba(255,120,0,0.3), 0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            Book a Discovery Call
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          className="mt-5 text-sm"
          style={{ color: "#8a8a8a" }}
        >
          Limited availability — a few slots open this month
        </motion.p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #060606)",
        }}
      />
    </section>
  );
}
