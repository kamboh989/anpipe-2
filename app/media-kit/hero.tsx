"use client";

import { motion } from "framer-motion";

export default function MediaKitHero() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const listItem = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section
      aria-labelledby="media-kit-hero-title"
      className="
        relative overflow-hidden
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
        py-14 sm:py-18
      "
    >
      {/* subtle background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(900px_420px_at_20%_10%,rgba(236,72,153,0.12),transparent_60%),radial-gradient(800px_380px_at_90%_20%,rgba(168,85,247,0.10),transparent_55%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="
            mx-auto max-w-6xl
            rounded-3xl bg-white/70 backdrop-blur
            ring-1 ring-black/5
            shadow-[0_18px_45px_rgba(0,0,0,0.08)]
            px-6 py-10 sm:px-10 sm:py-12
          "
        >
          {/* Overline */}
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-wide text-slate-700"
          >
            MEDIA KIT
          </motion.p>

          {/* H1 */}
          <motion.h1
            id="media-kit-hero-title"
            variants={fadeUp}
            className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Shannon Smith,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
              J.D., M.S.
            </span>
          </motion.h1>

          {/* Role line */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg sm:text-xl text-slate-800"
          >
            Neuroscience Speaker <span className="text-slate-400">|</span> Sales
            Keynote <span className="text-slate-400">|</span> Corporate
            Performance Strategist
          </motion.p>

          {/* AEO direct answer */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700"
          >
            This media kit provides event organizers, conference planners, and
            brands with everything they need to introduce Shannon Smith, select
            the right topic, and plan a successful keynote or workshop.
          </motion.p>

          {/* Included list */}
          <motion.div variants={fadeUp} className="mt-8">
            <p className="text-sm font-bold text-slate-900">Inside the Media Kit:</p>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              {[
                "Professional bio & speaker introduction copy",
                "Most requested speaking topics",
                "High-resolution headshots & brand assets",
                "Event formats & customization options",
                "Past experience & audience impact",
                "Booking & logistics overview",
              ].map((t) => (
                <motion.li
                  key={t}
                  variants={listItem}
                  className="flex gap-3 text-slate-800"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                  <span className="text-sm sm:text-base leading-relaxed">{t}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-sm sm:text-base text-slate-600"
          >
            Trusted by leaders across technology, retail, energy, telecom, and
            high-performance teams.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
