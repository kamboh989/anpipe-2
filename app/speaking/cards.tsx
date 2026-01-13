"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Flame, Network } from "lucide-react";

const items = [
  {
    title: "CONFERENCES",
    desc: `Engaging keynotes that bring together diverse industries and executive audiences.
Perfect for large stages, multi-track events, and association conferences.`,
    Icon: Users,
  },
  {
    title: "CORPORATE EVENTS & SALES KICKOFFS",
    desc: `High-impact sessions designed to elevate team performance, confidence, and clarity—ideal for SKOs, retreats, summits, and quarterly meetings.`,
    Icon: Briefcase,
  },
  {
    title: "FIRESIDE CHATS AND PANEL DISCUSSIONS",
    desc: `Conversational, relatable, deeply practical sessions tailored to the audience’s real-world challenges.`,
    Icon: Flame,
  },
  {
    title: "ASSOCIATIONS & PROFESSIONAL ORGS",
    desc: `Talks that bring together thousands of professionals across every level, from frontline teams to VPs and senior leaders.`,
    Icon: Network,
  },
];

export default function SpeakingFormatsSection() {
  const cardInitial = { opacity: 0, y: 18 };
  const cardInView = { opacity: 1, y: 0 };
  const cardTransition = { duration: 0.55, ease: "easeOut" as const };

  return (
    <section
      aria-labelledby="speaking-formats-title"
      className="
        relative overflow-hidden
        py-16 sm:py-20
        bg-[#0b0f14]
        text-white
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(800px_400px_at_20%_10%,rgba(236,72,153,0.14),transparent_60%),radial-gradient(700px_380px_at_90%_20%,rgba(250,204,21,0.10),transparent_55%)]
        "
      />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2
            id="speaking-formats-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Where Shannon Speaks
          </h2>
          <p className="mt-3 text-white/70 text-base sm:text-lg leading-relaxed">
            Formats designed for conferences, corporate teams, panels, and professional
            organizations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }, idx) => (
            <motion.article
              key={title}
              initial={cardInitial}
              whileInView={cardInView}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...cardTransition, delay: idx * 0.12 }}
              className="
                group relative
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-7
                shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                transition
                hover:-translate-y-1
                hover:border-white/20
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none absolute -inset-px rounded-2xl
                  opacity-0 blur-xl
                  bg-[radial-gradient(220px_120px_at_30%_20%,rgba(250,204,21,0.22),transparent_60%)]
                  transition-opacity duration-300
                  group-hover:opacity-100
                "
              />

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div
                    className="
                      h-14 w-14 rounded-2xl
                      grid place-items-center
                      bg-yellow-400/10
                      ring-1 ring-yellow-400/25
                    "
                  >
                    <Icon className="h-7 w-7 text-yellow-400" />
                  </div>
                </div>

                <h3 className="mt-5 text-center text-sm sm:text-base font-extrabold tracking-wide">
                  {title}
                </h3>

                <p className="mt-4 text-center text-sm sm:text-base leading-relaxed text-white/70 whitespace-pre-line">
                  {desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
