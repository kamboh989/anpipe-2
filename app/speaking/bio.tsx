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
           Shannon is an expert in consumer psychology, sales strategy, applied neuroscience and buyer behavior. She is a HarvardX Verified Neuroscience Researcher. She’s been helping people understand their brain in all different verticals and industries, from startup to enterprise, including Microsoft, for ~20 years by teaching them how to tap into our brain and optimize the brain for better performance.
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
              She's an expert in establishing a profitable brand and business via Linkedin and helps her clients not only establish brain-based sales systems but she also helps them to grow their own personal brands. Afterall, a good personal brand = immediate sales for any business you want to start, support or invest in. 
            </p>

            <p>
              Shannon volunteers at Venture Mechanics, a Seattle/Bellevue-based startup accelerator to help founders be more effective in sales. Shannon developed a mobile gaming app based on neuroscience research that changes your habits while you play and is also partnering to create an agentic AI model that predicts sales team performance (kind of like the minority report for sales teams). She is a captain, loves to sail and lives in the PNW. 
            </p>

          
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
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
