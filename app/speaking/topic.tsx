"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const topics = [
  {
    n: "01",
    title: "The Neuroscience of Influence & Ethical Persuasion",
    desc: "How the brain makes decisions—and what sales teams can do to create clarity instead of pressure.",
  },
  {
    n: "02",
    title: "The Neuroscience of Connection (How to connect without a cute dog.)",
    desc: "Learn the neuroscience of connection, why we get so lost in today's world, and how to get reconnected.",
  },
  {
    n: "03",
    title: "Sales Without Stress: The Neuroscience of Resilience & Rejection",
    desc: "A powerful session on regulating the nervous system to sell with confidence, clarity, and calm.",
  },
  {
    n: "04",
    title: "Neural Synchrony: How Top Performers Build Trust in Seconds",
    desc: "Trust isn’t magic—it’s brain chemistry. Learn the science behind instant connection.",
  },
  {
    n: "05",
    title: "From Pitch to Partnership: The Psychology of High-Impact Sales Conversations",
    desc: "Move beyond scripts to conversations that convert.",
  },
  {
    n: "06",
    title: "How to Fix Toxic Boss Problems With Neuroscience",
    desc: "How leaders accidentally trigger fear—and how to build psychological safety in yourself instead.",
  },
  {
    n: "07",
    title: "The Hidden ROI of LinkedIn: How Neuroscience Drives Visibility, Credibility & Sales",
    desc: "The science behind content that earns attention and builds authority.",
  },
  {
    n: "08",
    title: "Future of Sales: AI, Cognitive Load & the New Buyer’s Brain",
    desc: "Why buyers are fragmented—and how to adapt in real time.",
  },
];

const plannerPoints = [
  "Engaging, energetic, science-backed speaker",
  "Customizes content to your industry & audience",
  "Makes complex brain science simple, usable & fun",
  "Delivers stories, frameworks & memorable takeaways",
  "Offers pre-event planning calls + custom slides",
  "Drives actionable change—not “rah-rah” motivation",
  "Always focuses on engagement of the audience",
];

export default function SpeakingTopicsSection() {
  const itemInitial = { opacity: 0, y: 16 };
  const itemInView = { opacity: 1, y: 0 };
  const itemTransition = { duration: 0.55, ease: "easeOut" as const };

  return (
    <section
      aria-labelledby="topics-title"
      className="
        py-16 sm:py-20
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-700">TOPICS</p>

          <h2
            id="topics-title"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Most Requested <span className="text-pink-600">Speaking Topics</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            All topics below are designed to inspire, motivate, and drive attendees
            to further their success. Keynotes can be delivered as part of a speaker
            series, conference keynote, or fireside chat—and can be customized for
            your industry or event theme.
          </p>
        </div>

        {/* Topics Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, idx) => (
            <motion.article
              key={t.n}
              initial={itemInitial}
              whileInView={itemInView}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ ...itemTransition, delay: idx * 0.08 }}
              className="
                group relative
                rounded-2xl bg-white/70
                ring-1 ring-black/5
                p-6 sm:p-7
                shadow-[0_10px_24px_rgba(0,0,0,0.06)]
                transition
                hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.08)]
              "
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="
                    inline-flex items-center justify-center
                    rounded-full px-3 py-1
                    text-xs font-extrabold tracking-wide
                    bg-pink-600/10 text-pink-700
                    ring-1 ring-pink-600/20
                  "
                >
                  {t.n}
                </span>

                <span
                  aria-hidden="true"
                  className="
                    h-1.5 w-12 rounded-full
                    bg-gradient-to-r from-fuchsia-600 to-pink-500
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-extrabold text-slate-900">
                {t.title}
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {t.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Event Planners block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.18 }}
          className="
            mt-14
            rounded-2xl bg-white/70
            ring-1 ring-black/5
            p-7 sm:p-9
            shadow-[0_10px_24px_rgba(0,0,0,0.06)]
          "
        >
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Why Event Planners <span className="text-pink-600">Love</span> Working With
            Shannon
          </h3>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {plannerPoints.map((p, idx) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, ease: "easeOut" as const, delay: idx * 0.05 }}
                className="flex gap-3"
              >
                <CheckCircle2 className="h-5 w-5 text-pink-600 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                  {p}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
