"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function SpeakingFAQSection() {
  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "What topics does Shannon Smith speak about?",
        a: `Shannon’s keynotes cover the neuroscience of human behavior and performance, including:
• How to immunize yourself against a toxic boss
• How to overcome your buyer’s FOMU (fear of messing up), the real reason deals stall
• The neuroscience of trust and connection
• The neuroscience of leadership under pressure
• Neuroscience-based selling and buyer psychology (NeuroSell)

Her talks blend science, storytelling, and practical tools attendees can use immediately.`,
      },
      {
        q: "What is the “neuroscience of toxic boss immunity”?",
        a: `It’s a framework that teaches employees how to protect their emotional state, regulate their nervous system, and stop absorbing a toxic leader’s behavior. Audiences learn how to stay calm, grounded, and effective even in psychologically unsafe environments.`,
      },
      {
        q: "What is FOMU and why is it important for sales teams?",
        a: `FOMU stands for Fear of Messing Up, the real reason buyers hesitate, stall, or ghost. Shannon teaches the neural mechanisms behind buyer hesitation and how sellers can reduce threat responses, increase clarity, and help buyers make confident decisions.`,
      },
      {
        q: "What is the neuroscience of connection?",
        a: `It’s the study of how the brain forms trust, synchrony, and emotional safety. Shannon explains how connection affects engagement, leadership effectiveness, and sales — and provides tools to build connection quickly in conversations, presentations, and teams.`,
      },
      {
        q: "Does Shannon customize keynotes for each audience?",
        a: `Yes. Every keynote is tailored to your industry, event theme, audience goals, and current organizational challenges. Whether your focus is leadership, sales, well-being, or culture, the talk is adapted to fit your context.`,
      },
      {
        q: "What formats does Shannon offer?",
        a: `Keynotes, breakouts, leadership retreats, revenue kickoffs, workshops, fireside chats, and virtual sessions. Talks range from 20 minutes to 90 minutes, with extended workshops available for deeper implementation.`,
      },
      {
        q: "Who is the ideal audience for these neuroscience topics?",
        a: `Sales teams, revenue leaders, founders, executives, HR, L&D organizations, managers, hybrid teams, and high-pressure environments dealing with change, uncertainty, or burnout.`,
      },
      {
        q: "What outcomes can attendees expect from these keynotes?",
        a: `Audiences learn how to:
• Build immunity to toxic or stressful leadership
• Reduce fear-based decision paralysis
• Improve emotional regulation and performance under pressure
• Build trust and connection quickly
• Understand how the brain makes decisions
• Communicate with clarity and confidence
• Sell and lead through neuroscience, not pressure`,
      },
      {
        q: "Does Shannon speak at corporate offsites, retreats, or revenue kickoffs?",
        a: `Yes. These topics are especially effective at leadership offsites, SKOs, and company retreats where teams need alignment, clarity, or behavioral transformation.`,
      },
      {
        q: "How far in advance should we book a keynote?",
        a: `Most clients book 1–4 months in advance, but accelerated bookings may be available depending on schedule.`,
      },
      {
        q: "What makes Shannon’s keynotes different?",
        a: `Shannon is a HarvardX-verified neuroscience researcher who breaks down complex science into simple, actionable tools that teams can apply immediately. Her talks are engaging, emotionally resonant, and grounded in practical behavior change.`,
      },
      {
        q: "Do you offer follow-up workshops?",
        a: `Yes. Organizations often pair a keynote with a deeper-dive workshop on:
• Toxic boss immunity
• FOMU reduction for buyers
• Neuroscience of leadership
• Emotional regulation
• Neuro-based selling`,
      },
      {
        q: "Do you offer virtual sessions?",
        a: `Yes. Every topic can be delivered virtually, hybrid, or in-person.`,
      },
      {
        q: "What information should event organizers provide?",
        a: `Audience demographics, goals, biggest challenges, and desired outcomes. This ensures high relevance and customization.`,
      },
      {
        q: "How do we request pricing for a keynote or workshop?",
        a: `Submit the speaking inquiry form with your event details, and a customized proposal will be provided.`,
      },
    ],
    []
  );

  // AEO: FAQPage schema
  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a.replace(/•/g, "-") },
      })),
    }),
    [faqs]
  );

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      aria-labelledby="speaking-faq-title"
      className="
        py-16 sm:py-20
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <Script
        id="speaking-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm font-semibold text-slate-700">FAQs</p>
          <h2
            id="speaking-faq-title"
            className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Common{" "}
            <span className="text-pink-600">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            Quick answers for event organizers, teams, and leaders considering a keynote,
            workshop, or fireside chat.
          </p>
        </motion.div>

        {/* Accordion container */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.18 }}
          className="
            mt-10 overflow-hidden
            rounded-2xl bg-white/70
            ring-1 ring-black/5
            shadow-[0_18px_45px_rgba(0,0,0,0.08)]
          "
        >
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={item.q}
                className="border-t border-black/10 first:border-t-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-5 sm:px-6 py-4 sm:py-5
                    text-left
                    hover:bg-white/80 transition
                  "
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16px] font-semibold text-slate-900">
                    {i + 1}. {item.q}
                  </span>

                  <span
                    className={`
                      inline-flex h-10 w-10 items-center justify-center
                      rounded-full bg-white
                      ring-1 ring-black/10
                      transition
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5 text-slate-700" />
                  </span>
                </button>

                {/* Animated answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <p className="text-sm sm:text-base leading-relaxed text-slate-700 whitespace-pre-line">
                          {item.a.replace(/•/g, "•")}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
