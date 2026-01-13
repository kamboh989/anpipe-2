import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  // AEO: Short FAQ schema (same as before)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is applied neuroscience?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Applied neuroscience uses brain science to improve decision-making, influence, performance, and behavior change in real-world business environments.",
        },
      },
      {
        "@type": "Question",
        name: "Who is this for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It’s for leaders, sales professionals, and operators who want a practical edge in power dynamics, change, and high-stakes decisions.",
        },
      },
    ],
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="
        relative overflow-hidden
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      {/* AEO schema */}
      <Script
        id="hero-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-9 lg:py-10">
        <div className="grid items-center gap-5 md:gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="max-w-xl">
            {/* small badge */}
            <div className="inline-flex items-center rounded-full border border-pink-200 bg-white/70 px-4 py-1.5 text-sm font-semibold text-pink-700 shadow-sm">
              Applied Neuroscience
            </div>

            {/* heading (UPDATED) */}
            <h1
              id="hero-title"
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            >
              Applied Neuroscience{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
                for an
              </span>{" "}
              <br className="hidden sm:block" />
              Unfair{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
                Advantage
              </span>
            </h1>

            {/* subhead (UPDATED) */}
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Practical brain science for sales, power dynamics, corporate exits,
              and change that actually sticks.
            </p>

            {/* CTA (UPDATED) */}
            <div className="mt-7">
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
                Sign Up for the Newsletter
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE (UNCHANGED) */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="
                relative w-full max-w-2xl
                h-[320px] sm:h-[420px] lg:h-[500px]
                -mt-2 sm:-mt-4 lg:-mt-6
              "
            >
              <Image
                src="/hero.png"
                alt="Applied neuroscience training hero image"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
