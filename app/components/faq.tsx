"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function FAQSection() {
  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "What does “applied neuroscience” mean in your work?",
        a: "It means translating established brain science into tools that can be used in real conversations, decisions, and work environments.",
      },
      {
        q: "Is this therapy or mental health treatment?",
        a: "No. This work focuses on professional behavior, decision-making, communication, and performance.",
      },
      {
        q: "Who is this work for?",
        a: "Sales professionals, solopreneurs, coaches, leaders, and organizations operating under pressure or change.",
      },
      {
        q: "Do I need a background in neuroscience to work with you?",
        a: "No. Everything is explained in clear language and designed to be practical.",
      },
      {
        q: "How is this different from traditional sales training?",
        a: "Traditional sales training focuses on scripts and tactics. This work focuses on how buyers and sellers think, decide, and regulate under pressure.",
      },
      {
        q: "Can this help me leave corporate and start my own business?",
        a: "Yes. Many clients use this work to build predictable revenue before exiting corporate roles.",
      },
      {
        q: "What is the 20K Brain-Based Sales System?",
        a: "It is a neuroscience-informed framework for monetizing LinkedIn, clarifying offers, and building a repeatable sales process that generates steady clients.",
      },
      {
        q: "Is this only for coaches and consultants?",
        a: "No. The principles apply to anyone selling ideas, services, or solutions.",
      },
      {
        q: "Does this work help with buyer hesitation and stalled deals?",
        a: "Yes. Much of the work focuses on reducing buyer threat, cognitive overload, and decision paralysis.",
      },
      {
        q: "Is this anti-corporate or anti-management?",
        a: "No. It is pro-agency. The goal is informed choice, whether someone stays or leaves.",
      },
      {
        q: "Can this help me deal with a toxic boss without quitting?",
        a: "Yes. The toxic boss work focuses on nervous-system regulation, pattern recognition, and maintaining clarity under power imbalance.",
      },
      {
        q: "Will this help me become more confident?",
        a: "Confidence often improves as a byproduct of clarity, regulation, and predictability.",
      },
      {
        q: "Is this mindset work?",
        a: "No. The focus is on neurological mechanisms that shape behavior under stress.",
      },
      {
        q: "How quickly do people see results?",
        a: "Many people notice shifts in clarity, stress response, and communication within weeks.",
      },
      {
        q: "Will this help me become more confident?",
        a: "Confidence often improves as a byproduct of clarity, regulation, and predictability.",
      },
      {
        q: "Does this require daily practices or long routines?",
        a: "No. Most tools are designed to work in the moment, during real interactions.",
      },
      {
        q: "Can organizations use this for change initiatives?",
        a: "Yes. The work is used to increase adoption, reduce resistance, and prevent burnout during change.",
      },
      {
        q: "Is this data-backed or experiential?",
        a: "Both. The work is grounded in peer-reviewed research and tested in real-world environments.",
      },
      {
        q: "Do you work with teams or only individuals?",
        a: "Both. I work with individuals, sales teams, leadership groups, and organizations.",
      },
      {
        q: "Is this suitable for high-performing professionals?",
        a: "Yes. Many clients are already successful but want more consistency and control.",
      },
      {
        q: "What is the first step to working together?",
        a: "Most people start by exploring the newsletter, content, or a short conversation to assess fit.",
      },
    ],
    []
  );

  // AEO: FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      aria-labelledby="faq-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-4">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="faq-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Common{" "}
            <span className="text-pink-600">FAQ&apos;s!</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            Clear answers to help you decide.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 rounded-2xl bg-white/60 ring-1 ring-black/5 overflow-hidden">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={`${item.q}-${i}`} // ✅ unique key (UI same)
                className="border-t border-black/10 first:border-t-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="
                    w-full flex items-center justify-between gap-4
                    px-5 sm:px-6 py-4 sm:py-5
                    text-left
                    hover:bg-white/70 transition
                  "
                  aria-expanded={open}
                >
                  <span className="text-[15px] sm:text-[16px] font-semibold text-slate-900">
                    {item.q}
                  </span>

                  <span
                    className={`
                      inline-flex h-9 w-9 items-center justify-center
                      rounded-full ring-1 ring-black/10 bg-white
                      transition
                      ${open ? "rotate-180" : "rotate-0"}
                    `}
                    aria-hidden="true"
                  >
                    <ChevronDown className="h-5 w-5 text-slate-700" />
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-200
                    ${
                      open
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden px-5 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-sm sm:text-base leading-relaxed text-slate-700">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
