"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  const fadeUpInitial = { opacity: 0, y: 14 };
  const fadeUpAnimate = { opacity: 1, y: 0 };
  const fadeUpTransition = { duration: 0.55, ease: "easeOut" as const };

  return (
    <section
      aria-labelledby="contact-hero-title"
      className="
        relative overflow-hidden
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
        py-16 sm:py-20
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(900px_420px_at_20%_10%,rgba(236,72,153,0.12),transparent_60%)]
        "
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.p
          initial={fadeUpInitial}
          animate={fadeUpAnimate}
          transition={fadeUpTransition}
          className="text-sm font-semibold tracking-wide text-slate-700"
        >
          CONTACT
        </motion.p>

        <motion.h1
          id="contact-hero-title"
          initial={fadeUpInitial}
          animate={fadeUpAnimate}
          transition={{ ...fadeUpTransition, delay: 0.06 }}
          className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
        >
          Get in Touch With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
            Shannon Smith
          </span>
        </motion.h1>

        <motion.p
          initial={fadeUpInitial}
          animate={fadeUpAnimate}
          transition={{ ...fadeUpTransition, delay: 0.12 }}
          className="mt-4 text-lg sm:text-xl text-slate-800"
        >
          Speaking inquiries, media requests, partnerships, and corporate engagements
        </motion.p>

        <motion.p
          initial={fadeUpInitial}
          animate={fadeUpAnimate}
          transition={{ ...fadeUpTransition, delay: 0.18 }}
          className="mt-6 text-base sm:text-lg leading-relaxed text-slate-700 max-w-3xl mx-auto"
        >
          Use this page to contact Shannon Smith regarding keynote speaking,
          workshops, corporate training, media interviews, or partnership
          opportunities. Every inquiry is reviewed personally and responded to
          with care.
        </motion.p>

        <motion.p
          initial={fadeUpInitial}
          animate={fadeUpAnimate}
          transition={{ ...fadeUpTransition, delay: 0.24 }}
          className="mt-6 text-sm sm:text-base text-slate-600"
        >
          For faster responses, please include your event type, date, audience size,
          and goals.
        </motion.p>
      </div>
    </section>
  );
}
