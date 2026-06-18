"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "What I Do", href: "#what-i-do" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Availability", href: "#availability" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        {/* Logo */}
        <span className="text-white font-semibold text-lg tracking-tight shrink-0">
          MunacoAI
        </span>

        {/* Center nav links — hidden on small screens */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:text-white"
              style={{ color: "#8a8a8a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8a8a8a")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Book Call CTA */}
        <a
          href="https://calendly.com/amunaco/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-xl text-sm font-medium text-white transition-all duration-200 hover:brightness-110 shrink-0"
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
