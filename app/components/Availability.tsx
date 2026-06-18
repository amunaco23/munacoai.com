"use client";

import { motion } from "framer-motion";
import { useState } from "react";

function getWeeks(count: number) {
  const weeks = [];
  const today = new Date();
  // Find the nearest Sunday
  const startDate = new Date(today);
  const dayOfWeek = startDate.getDay();
  startDate.setDate(startDate.getDate() - dayOfWeek);

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  for (let i = 0; i < count; i++) {
    const start = new Date(startDate);
    start.setDate(startDate.getDate() + i * 7);
    const end = new Date(start);
    end.setDate(start.getDate() + 6);

    const label = `${months[start.getMonth()]} ${start.getDate()}–${
      start.getMonth() !== end.getMonth()
        ? `${months[end.getMonth()]} ${end.getDate()}`
        : end.getDate()
    }`;

    weeks.push({ label, index: i });
  }

  return weeks;
}

// Slot pattern: most booked, a couple available
const slotPattern = [
  { status: "booked" as const },
  { status: "booked" as const },
  { status: "booked" as const },
  { status: "available" as const, slots: 1 },
  { status: "booked" as const },
  { status: "booked" as const },
  { status: "booked" as const },
  { status: "available" as const, slots: 2 },
];

export default function Availability() {
  const weeks = getWeeks(8);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="availability" className="py-28 px-6 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,120,0,0.3), transparent)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#ff8a00" }}>
            Availability
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Current Availability
          </h2>
          <p className="mt-4 text-base" style={{ color: "#8a8a8a" }}>
            I only take a limited number of consulting engagements at one time.
          </p>
        </motion.div>

        {/* Desktop table */}
        <div className="hidden md:block mt-12">
          <div className="glass rounded-3xl overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {weeks.map((week, i) => {
              const pattern = slotPattern[i];
              const isAvailable = pattern.status === "available";
              const isHovered = hoveredIndex === i;

              return (
                <motion.div
                  key={week.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                  onMouseEnter={() => isAvailable && setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="flex items-center justify-between px-8 py-5 relative transition-colors duration-200"
                  style={{
                    borderBottom: i < weeks.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    background: isAvailable && isHovered
                      ? "rgba(255,120,0,0.06)"
                      : "transparent",
                    cursor: isAvailable ? "pointer" : "default",
                  }}
                >
                  {isAvailable && (
                    <div
                      className="absolute left-0 top-0 bottom-0 w-0.5"
                      style={{ background: "linear-gradient(to bottom, #ff8a00, #d72600)" }}
                    />
                  )}

                  <span
                    className="font-mono text-sm tracking-wide"
                    style={{
                      color: isAvailable ? "#d1d1d1" : "#3a3a3a",
                      textDecoration: isAvailable ? "none" : "line-through",
                    }}
                  >
                    {week.label}
                  </span>

                  <div className="flex items-center gap-4">
                    {isAvailable ? (
                      <>
                        <span
                          className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255,120,0,0.12)",
                            color: "#ff8a00",
                            border: "1px solid rgba(255,120,0,0.25)",
                          }}
                        >
                          {(pattern as { status: "available"; slots: number }).slots === 1
                            ? "1 Slot Available"
                            : `${(pattern as { status: "available"; slots: number }).slots} Slots Available`}
                        </span>
                        {isHovered && (
                          <motion.span
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-xs"
                            style={{ color: "#8a8a8a" }}
                          >
                            ~5–10 hrs
                          </motion.span>
                        )}
                      </>
                    ) : (
                      <span
                        className="text-xs font-semibold tracking-widest uppercase"
                        style={{ color: "#3a3a3a" }}
                      >
                        Fully Booked
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden mt-10 space-y-3">
          {weeks.map((week, i) => {
            const pattern = slotPattern[i];
            const isAvailable = pattern.status === "available";

            return (
              <motion.div
                key={week.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-2xl px-5 py-4 flex items-center justify-between"
                style={{
                  borderColor: isAvailable ? "rgba(255,120,0,0.25)" : "rgba(255,255,255,0.05)",
                  background: isAvailable ? "rgba(255,120,0,0.04)" : "rgba(255,255,255,0.02)",
                }}
              >
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#8a8a8a" }}>
                    Week of
                  </p>
                  <p
                    className="font-mono text-sm"
                    style={{
                      color: isAvailable ? "#d1d1d1" : "#3a3a3a",
                      textDecoration: isAvailable ? "none" : "line-through",
                    }}
                  >
                    {week.label}
                  </p>
                </div>
                {isAvailable ? (
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,120,0,0.12)",
                      color: "#ff8a00",
                      border: "1px solid rgba(255,120,0,0.25)",
                    }}
                  >
                    {(pattern as { status: "available"; slots: number }).slots === 1 ? "1 Open" : `${(pattern as { status: "available"; slots: number }).slots} Open`}
                  </span>
                ) : (
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#3a3a3a" }}>
                    Booked
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://calendly.com/amunaco/30min"
            className="inline-block px-8 py-4 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-[1.03] hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, #ff8a00, #ff5e00, #d72600)",
              boxShadow: "0 0 30px rgba(255,120,0,0.25)",
            }}
          >
            Claim Your Slot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
