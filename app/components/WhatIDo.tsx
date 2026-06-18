"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "◎",
    title: "Identify Opportunities",
    description:
      "Discover repetitive work, manual processes, and operational inefficiencies hiding inside your business.",
  },
  {
    icon: "⌖",
    title: "Prioritize AI Projects",
    description:
      "Separate AI hype from practical business value. Focus on what actually moves the needle.",
  },
  {
    icon: "⟳",
    title: "Implement Solutions",
    description:
      "Build workflows, automations, and AI systems that save time and money — not just demos.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-28 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#ff8a00" }}>
            What I Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Practical AI consulting,<br />
            <span className="gradient-text">zero fluff.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass rounded-3xl p-8 cursor-default group"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="text-2xl mb-5 w-10 h-10 flex items-center justify-center rounded-xl"
                style={{
                  background: "rgba(255, 120, 0, 0.1)",
                  color: "#ff8a00",
                  border: "1px solid rgba(255,120,0,0.2)",
                }}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#8a8a8a" }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
