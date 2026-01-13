"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function ContactFAQSection() {
  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "How long does it take to receive a response?",
        a: "Most inquiries receive a response within 24–48 hours. Speaking requests and corporate training inquiries are prioritized.",
      },
      {
        q: "Do you work with companies outside the United States?",
        a: "Yes. NeuroSell delivers virtual and on-site training for teams worldwide. Speaking engagements and corporate programs can be adapted for global audiences.",
      },
      {
        q: "What information should I include in my inquiry?",
        a: "Include your company name, team size, the challenges you’re trying to solve, and whether you’re interested in sales training, a keynote, or a custom workshop. A few sentences are enough.",
      },
      {
        q: "How far in advance should we book a training or keynote?",
        a: "Most clients book 4–8 weeks in advance for training and 2–4 months for keynotes. Last-minute bookings may be available depending on the schedule.",
      },
      {
        q: "Do you customize training programs for our industry or sales team?",
        a: "Yes. Every NeuroSell program is tailored to your team’s deal cycle, buyer psychology, objections, messaging, and industry demands.",
      },
      {
        q: "What types of companies do you work with?",
        a: "B2B sales teams, founders, SDR teams, account executives, and organizations selling high-consideration or complex solutions. Programs work especially well for teams in tech, consulting, SaaS, and professional services.",
      },
      {
        q: "Can I request a proposal before scheduling a call?",
        a: "Yes. If you prefer, a short intake form can be completed first, and you’ll receive a customized proposal outlining program options and outcomes.",
      },
      {
        q: "Do you offer virtual and on-site programs?",
        a: "Yes. NeuroSell training is available in both formats, depending on your budget, team needs, and event schedule.",
      },
      {
        q: "How long is a typical corporate training engagement?",
        a: "The signature NeuroSell program runs 12 weeks, but accelerated formats (half-day, full-day, 2-day intensives) are available for events or custom workshops.",
      },
      {
        q: "What’s the first step to work with Shannon?",
        a: "Submit the form with your goals and timeline. From there, you’ll be invited to a short discovery call to determine the best format for your team or event.",
      },
      {
        q: "What’s your pricing structure?",
        a: "Pricing depends on program length, team size, and delivery format. You’ll receive transparent options during the initial consultation.",
      },
      {
        q: "Do you offer speaking topics beyond sales training?",
        a: "Yes. Keynotes also cover neuroscience of trust, the neuroscience of connection, toxic bosses, decision-making psychology, emotional regulation, leadership behavior under pressure, and buyer influence without pressure.",
      },
      {
        q: "Can startups or small teams work with you?",
        a: "Yes. The training adapts to early-stage teams and founders who sell. Many startups use NeuroSell to accelerate early traction and improve founder-led sales.",
      },
      {
        q: "What if we just have questions and aren’t ready to commit?",
        a: "That’s completely fine. Reaching out doesn’t obligate you to anything. The discovery call is simply to determine whether the program is a good fit.",
      },
    ],
    []
  );

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }),
    [faqs]
  );

  const [open, setOpen] = useState<number>(0);

  return (
    <section
      aria-labelledby="contact-faq-title"
      className="
        py-16 sm:py-20
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <Script
        id="contact-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="contact-faq-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Contact <span className="text-pink-600">FAQ</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            Quick answers to common questions about speaking engagements and NeuroSell
            training—so you can reach out with clarity.
          </p>
        </div>

        <div
          className="
            mt-10 overflow-hidden
            rounded-2xl bg-white/70
            ring-1 ring-black/5
            shadow-[0_18px_45px_rgba(0,0,0,0.08)]
          "
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.06 }}
                className="border-t border-black/10 first:border-t-0"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-5 sm:px-6 py-4 sm:py-5
                    text-left
                    hover:bg-white/80 transition
                  "
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16px] font-semibold text-slate-900">
                    {f.q}
                  </span>

                  <span
                    className={`
                      inline-flex h-10 w-10 items-center justify-center
                      rounded-full bg-white
                      ring-1 ring-black/10
                      transition-transform
                      ${isOpen ? "rotate-180" : "rotate-0"}
                    `}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5 text-slate-700" />
                  </span>
                </button>

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
                        <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
