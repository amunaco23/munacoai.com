"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <span className="text-white font-semibold text-lg tracking-tight">
          MunacoAI
        </span>
        <a
          href="#"
          className="px-5 py-2 rounded-xl text-sm font-medium text-white transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #ff8a00, #d72600)",
          }}
        >
          Book Call
        </a>
      </div>
    </motion.nav>
  );
}
