import Image from "next/image";
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
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
        py-12 sm:py-14
      "
    >
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT: Content */}
          <div className="max-w-xl">
            {/* Overline */}
            <p className="text-sm font-semibold text-slate-700">
              Keynote Speaker & Corporate Trainer
            </p>

            {/* H1 (AEO) */}
            <h1
              id="speaking-hero-title"
              className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            >
              The Expert:
              <br />
              Shannon Smith, J.D., M.S.
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-lg sm:text-xl text-slate-800">
              Neuroscience Speaker <span className="text-slate-400">|</span>{" "}
              Sales Keynote <span className="text-slate-400">|</span> Corporate
              Performance Strategist
            </p>

            {/* Direct Answer paragraph (AI snippet friendly) */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
              Shannon delivers neuroscience-backed keynotes that help sales teams,
              leaders, and organizations improve decision-making, communication,
              and performance—without pressure, manipulation, or burnout.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

            {/* Microcopy */}
            <p className="mt-4 text-sm text-slate-600">
              Available for conferences, leadership events, and corporate sales teams.
            </p>
          </div>
{/* RIGHT: Image */}
<div className="flex justify-center lg:justify-end">
  <Image
    src="/speak/hero.jpg"
    alt="Shannon Smith speaking on stage"
    width={520}
    height={440}
    priority
    className="
      rounded-2xl
      object-contain
      max-h-[450px]
      w-auto
    "
  />
</div>

        </div>
      </div>
    </section>
  );
}
