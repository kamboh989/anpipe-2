

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Hero() {
  // AEO: Short FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NeuroSales training?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NeuroSales is an ethical persuasion training sprint that helps sales teams build trust faster, handle rejection better, and close with clarity instead of pressure.",
        },
      },
      {
        "@type": "Question",
        name: "Who is it for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It’s for sales professionals and teams who want consistent closes without pushing harder—using connection, clarity, and neuroscience-backed communication.",
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
              NeuroSales
            </div>

            {/* heading same style */}
            <h1
              id="hero-title"
              className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl"
            >
              Close More{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
                Without
              </span>{" "}
              <br className="hidden sm:block" />
              Pushing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
                Harder!
              </span>
            </h1>

            {/* desc (short, clean like screenshot) */}
            <p className="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
              Train your team to sell through connection—not pressure. Learn
              ethical persuasion that builds trust, reduces resistance, and helps
              you close with clarity.
            </p>

            {/* CTA */}
            <div className="mt-7">
              <Link
                href="/apply"
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
                Enroll Now
              </Link>
            </div>
          </div>

         
          {/* RIGHT IMAGE */}
<div className="relative flex items-start justify-center">
  <div
    className="
      relative w-full max-w-xl
      h-[260px] sm:h-[340px] lg:h-[420px]
      mt-2 sm:mt-0
    "
  >
    <Image
      src="/hero.png"
      alt="NeuroSales training hero image"
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 520px"
      className="object-contain object-top"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
