"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What topics does Shannon Smith speak on?",
    a: (
      <>
        Shannon speaks on neuroscience and human behavior, including:
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>How to immunize yourself against a toxic boss</li>
          <li>How to overcome buyer FOMU (fear of messing up)</li>
          <li>The neuroscience of trust and connection</li>
          <li>The neuroscience of leadership under pressure</li>
          <li>Neuroscience-based selling and buyer psychology (NeuroSell)</li>
        </ul>
        <p className="mt-3">
          Her talks translate brain science into simple, actionable tools for
          teams and audiences across industries.
        </p>
      </>
    ),
  },
  {
    q: "Do you provide multiple versions of your bio for events?",
    a: "Yes. Shannon offers short, medium, and full-length bios for event programs, websites, press kits, and speaker introductions. Custom variations can be provided upon request.",
  },
  {
    q: "Do you have approved headshots that media and event organizers can use?",
    a: "Yes. High-resolution and web-optimized headshots are available, including vertical, horizontal, color, and black-and-white options suitable for event collateral and press features.",
  },
  {
    q: "What are your AV requirements for speaking engagements?",
    a: "A wireless microphone, projector or LED screen, and confidence monitor are recommended. A lavalier mic is preferred for movement-heavy talks. Detailed AV requirements are provided in the pre-event packet.",
  },
  {
    q: "Do you have speaker introduction scripts available?",
    a: "Yes. Shannon provides short and long versions of approved introduction scripts so event hosts can introduce her accurately and confidently.",
  },
  {
    q: "Can you provide a customized introduction for our event?",
    a: "Absolutely. If your event has a theme, company values, or audience-specific context, a tailored introduction can be prepared.",
  },
  {
    q: "Does Shannon conduct pre-event briefings or planning calls?",
    a: "Yes. Every engagement includes a pre-event planning call to understand audience demographics, organizational goals, event themes, and desired outcomes.",
  },
  {
    q: "What industries does Shannon typically speak to?",
    a: "Technology, SaaS, healthcare, consulting, financial services, professional services, HR and L&D organizations, sales teams, and leadership groups navigating pressure, change, or burnout.",
  },
  {
    q: "Do you offer promotional assets for marketing the event?",
    a: "Yes. Promotional assets include headshots, bios, topic descriptions, approved quotes, and copy for newsletters, event pages, and social media.",
  },
  {
    q: "Can Shannon stay for meet-and-greets, panels, or VIP sessions?",
    a: "Yes. Panel discussions, audience Q&A, VIP meet-and-greets, book signings, and fireside chats can be added depending on the event schedule.",
  },
  {
    q: "Do you travel for speaking engagements?",
    a: "Yes. Shannon travels nationally and internationally. Travel logistics and accommodations are outlined in the event agreement.",
  },
  {
    q: "How far in advance should we book Shannon as a speaker?",
    a: "Most events book 2–4 months in advance. Earlier booking is recommended for annual conferences and large corporate events.",
  },
  {
    q: "Do you offer custom workshop sessions in addition to keynotes?",
    a: (
      <>
        Yes. Many clients add hands-on workshops on:
        <ul className="mt-3 list-disc pl-5 space-y-1">
          <li>Toxic boss immunity</li>
          <li>Reducing buyer hesitation (FOMU)</li>
          <li>Emotional regulation for leaders</li>
          <li>Neuroscience of high-performing teams</li>
          <li>NeuroSell for sales organizations</li>
        </ul>
      </>
    ),
  },
  {
    q: "How can press or media contact Shannon for interviews?",
    a: "Media inquiries can be submitted through the Contact page. Interviews, podcast appearances, and editorial contributions are typically scheduled within 1–2 weeks.",
  },
  {
    q: "Do you offer a full speaker one-sheet or downloadable media kit?",
    a: "Yes. Event organizers can download a full media kit that includes topics, bios, headshots, testimonials, AV requirements, contact information, and booking guidelines.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-title"
      className="py-16 sm:py-20 bg-white"
    >
      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Frequently Asked{" "}
            <span className="text-pink-600">Questions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700">
            Answers to common questions from event organizers, media teams, and
            corporate partners.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="
                  rounded-2xl bg-white
                  ring-1 ring-black/5
                  shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                "
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-6 py-5 text-left
                  "
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-slate-900">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-500 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-slate-700">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
