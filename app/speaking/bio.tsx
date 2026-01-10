"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BioSection() {
  return (
    <section
      aria-labelledby="bio-title"
      className="py-14 sm:py-18"
    >
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2
            id="bio-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            BIO
          </h2>

          {/* AEO direct answer */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-4xl">
            Shannon is an expert in consumer psychology, sales strategy, applied
            neuroscience, and buyer behavior. She is a HarvardX Verified
            Neuroscience Researcher and has spent nearly two decades helping
            individuals and organizations understand how the brain drives
            performance, decision-making, and sales outcomes.
          </p>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-4xl">
            Her work spans startups to enterprise organizations—including
            Microsoft—where she teaches leaders, sales teams, and founders how
            to optimize the brain for clarity, confidence, and consistent
            results under pressure.
          </p>

          {/* Expertise list */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-slate-900">
              Her work integrates:
            </h3>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-slate-800">
              {[
                "Neuroscience of decision-making",
                "Emotional regulation & resilience",
                "Sales psychology & influence",
                "Toxic Boss Immunization",
                "Performance under pressure",
                "Leadership communication",
                "LinkedIn branding & trust-building",
                "High-ROI, brain-based sales systems",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand & impact */}
          <div className="mt-8 space-y-4 max-w-4xl text-base sm:text-lg text-slate-700">
            <p>
              Shannon is an expert in building profitable brands and businesses
              through LinkedIn. She helps clients establish brain-based sales
              systems while simultaneously growing personal brands—because a
              strong personal brand creates immediate sales opportunities for
              any business you want to start, support, or invest in.
            </p>

            <p>
              She volunteers at Venture Mechanics, a Seattle/Bellevue-based
              startup accelerator, where she helps founders improve sales
              effectiveness. Shannon also developed a mobile gaming app based on
              neuroscience research that helps change habits through play.
            </p>

            <p>
              In addition, she is partnering to build an agentic AI model that
              predicts sales team performance—similar to a “Minority Report”
              system for sales organizations. Outside of work, Shannon is a
              captain, loves to sail, and lives in the Pacific Northwest.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/speaking-inquiries"
              className="
                inline-flex items-center justify-center
                rounded-xl px-6 py-3
                text-base font-semibold text-white
                bg-gradient-to-r from-fuchsia-600 to-pink-500
                shadow-[0_12px_26px_rgba(236,72,153,0.18)]
                ring-1 ring-black/5
                transition hover:-translate-y-0.5
              "
            >
              Book Shannon to Speak
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
