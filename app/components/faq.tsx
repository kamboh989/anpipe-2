"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import { ChevronDown } from "lucide-react";

type FAQ = { q: string; a: string };

export default function FAQSection() {
  const faqs: FAQ[] = useMemo(
    () => [
      {
        q: "What is the most effective sales training for B2B teams?",
        a: "The most effective sales training today blends neuroscience, buyer psychology, and modern communication skills. Traditional script-based methods don’t match how buyers make decisions. NeuroSell uses cognitive science to help reps build trust faster, reduce resistance, and communicate with clarity — improving conversions without pressure.",
      },
      {
        q: "Does sales training actually work for experienced reps?",
        a: "Yes — when it targets the brain, not just techniques. Experienced reps don’t usually lack knowledge; they struggle with pressure, rejection, cognitive load, and buyer hesitation. Neuroscience-based training helps them regulate stress, read buyer signals, and navigate complex deals with more clarity and confidence.",
      },
      {
        q: "How can we improve our sales team’s performance quickly?",
        a: "Performance improves fastest when you address the nervous system and decision-making pathways behind every conversation. Teaching reps how to stay regulated, reduce neural noise, and create cognitive ease for buyers leads to immediate improvements in clarity, trust, and movement in pipeline conversations — often within 30–45 days.",
      },
      {
        q: "Why do sales reps freeze, ramble, or lose clarity on calls?",
        a: "This happens because of “neural noise” — the brain’s response to stress or uncertainty. When neural noise increases, clarity decreases. Neuroscience-based sales training teaches reps how to stay regulated so they think clearly, speak concisely, and stay attuned to the buyer.",
      },
      {
        q: "How can we reduce buyer hesitation in our sales process?",
        a: "Buyers hesitate when their brain perceives lack of clarity, risk, or cognitive overload. Training your team to lower buyer threat responses, simplify messaging, and create emotional safety helps buyers move forward confidently. This reduces ghosting, delays, and let me think about it.",
      },
      {
        q: "What skills separate top-performing sellers from everyone else?",
        a: "Top performers regulate their emotions, communicate with clarity, read nonverbal signals, reduce cognitive load for buyers, and create rapid trust. These are neuroscience-driven skills — not scripts — and they directly influence deal velocity and close rates.",
      },
       {
        q: "How does neuroscience improve sales performance?",
        a: "Neuroscience helps sellers understand how the brain processes risk, trust, clarity, and decision-making. When reps learn how to regulate their nervous system and communicate in a way that aligns with buyer psychology, sales conversations become easier, more natural, and more effective.",
      },
      {
        q: "What’s the ROI of neuroscience-based sales training?",
        a: "Leaders typically see faster ramp times, fewer stalled deals, reduced ghosting, better emotional stability on teams, and higher conversion rates. Many organizations see measurable performance gains within 60–90 days.",
      },
         {
        q: "How do we help reps handle rejection better?",
        a: "Rejection triggers the brain’s threat response, causing reps to spiral mentally or avoid follow-ups. Neuroscience-based training teaches emotional regulation techniques that help reps reset within minutes and stay composed, instead of carrying rejection into the rest of their day.",
      },
       {
        q: "How do we build trust faster in sales conversations?",
        a: "Trust forms when buyers feel safe, understood, and clear on what’s happening next. Techniques like neural synchrony, pacing, tone matching, cognitive ease, and transparent framing significantly accelerate trust — without pressure.",
      },
       {
        q: "What causes buyers to ghost even when they seem interested?",
        a: "Ghosting often happens when buyers feel overwhelmed, unclear, or emotionally pressured. When sellers create cognitive simplicity, reduce decision friction, and keep emotional safety high, ghosting drops dramatically.",
      },
       {
        q: "How long does it take to see results from neuroscience-based sales training?",
        a: "Teams typically see behavioral shifts within 4 weeks and measurable changes in pipeline movement within 90 days, depending on deal cycles.",
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
              <div key={item.q} className="border-t border-black/10 first:border-t-0">
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
                    ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
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
