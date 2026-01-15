import Link from "next/link";
import Script from "next/script";

export default function SpeakingHero() {
  // AEO: Person schema (speaking page ke liye helpful)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shannon Smith",
    honorificSuffix: "J.D., M.S.",
    jobTitle: "Neuroscience Speaker",
    knowsAbout: [
      "Neuroscience",
      "Sales",
      "Decision-Making",
      "Corporate Performance",
      "Communication",
    ],
  };

  return (
    <section
      aria-labelledby="speaking-hero-title"
      className="
        relative overflow-hidden
        bg-white
        py-14 sm:py-20
      "
    >
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4">
        {/* Centered wrapper */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Optional overline (agar screenshot me nahi chahiye to remove kar dein) */}
            <p className="text-sm font-semibold tracking-wide text-slate-600">
              Keynote Speaker & Corporate Trainer
            </p>

            {/* Main Title (Screenshot style) */}
            <h1
              id="speaking-hero-title"
              className="
                mt-5
                text-slate-900
                font-semibold
                leading-[0.95]
                tracking-tight
                text-5xl sm:text-6xl lg:text-7xl
              "
            >
              <span className="block">The Expert:</span>
              <span className="block mt-3 font-semibold">
                Shannon Smith, J.D.,
              </span>
              <span className="block font-semibold">M.S.</span>
            </h1>

            {/* Descriptor line (Screenshot jaisi single line / wrap nicely) */}
            <p
              className="
                mt-6
                text-slate-900
                text-xl sm:text-2xl
                leading-snug
                max-w-3xl
              "
            >
              Neuroscience Speaker{" "}
              <span className="text-slate-400">|</span> Sales Keynote{" "}
              <span className="text-slate-400">|</span> Corporate Performance
              Strategist
            </p>

           

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            {/* Microcopy */}
            <p className="mt-4 text-sm text-slate-600">
              Available for conferences, leadership events, and corporate sales teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
