"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { highwayPreset } from "./HyperspeedPresets";

const Hyperspeed = dynamic(() => import("./Hyperspeed"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hyperspeed highway background */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed effectOptions={highwayPreset} />
      </div>

      {/* Dark overlay so text stays readable */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,6,6,0.55) 0%, rgba(6,6,6,0.35) 50%, rgba(6,6,6,0.85) 90%, #060606 100%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1
            className="font-bold leading-[1.05] tracking-tight text-white"
            style={{ fontSize: "clamp(52px, 8vw, 96px)" }}
          >
            Hire an AI operator.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-8 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#d1d1d1" }}
        >
          I&apos;ll find where AI fits in your business and build the solutions
          that save you time and money.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="mt-6"
        >
          <span className="text-2xl font-semibold" style={{ color: "#ff8a00" }}>
            $199
          </span>
          <span className="text-lg ml-1" style={{ color: "#8a8a8a" }}>/hour</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="https://calendly.com/amunaco/30min"
            target="_blank"
            rel="noopener noreferrer"
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

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #060606)",
        }}
      />
    </section>
  );
}
