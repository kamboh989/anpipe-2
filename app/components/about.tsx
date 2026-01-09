import Image from "next/image";
import Link from "next/link";

export default function AboutShannonSection() {
  return (
    <section
      aria-labelledby="about-shannon-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center lg:justify-start">
            <div
              className="
                relative w-full max-w-sm sm:max-w-md
                h-[360px] sm:h-[430px] lg:h-[520px]
              "
            >
              <Image
                src="/about.png"
                alt="Shannon speaking on stage"
                fill
                priority
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-2xl">
            <h2
              id="about-shannon-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
                Shannon!
              </span>
            </h2>

            {/* AEO: short answer first */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            Shannon is an expert in consumer psychology, corporate sales training and applied neuroscience as it relates to the buyer's brain. She is a HarvardX Verified Neuroscience Researcher. She’s been helping people understand their brain in all different verticals and industries, including Big Tech, for ~20 years by teaching them how to tap into our brain to improve our performance in both the personal and professional sense.
            </p>

            {/* Supporting paragraphs (keep clean, not too long) */}
            <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
              <p>
                She teaches her clients how to tap into the prospect's brain to improve sales. She's an expert in establishing a profitable brand and business via Linkedin and helps her clients not only establish brain-based sales systems but she also helps them to grow their own personal brands.
              </p>
              <p>
                Shannon volunteers at Venture Mechanics, a Seattle/Bellevue-based startup accelerator to help founders be more effective in sales. Shannon developed a mobile gaming app based on neuroscience research that changes your habits while you play and is also partnering to create an agentic AI model that predicts sales team performance (kind of like the minority report for sales teams). She is a captain, loves to sail and lives in the PNW.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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

              <Link
                href="/podcast"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-6 py-3
                  text-base font-semibold text-slate-900
                  bg-white/80
                  ring-1 ring-black/10
                  transition hover:bg-white
                "
              >
                Podcast
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
