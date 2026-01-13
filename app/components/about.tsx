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
              Shannon is a HarvardX-verified neuroscience researcher and
              corporate trainer specializing in consumer psychology, applied
              neuroscience, and the buyer’s brain. For nearly 20 years, she’s
              helped teams across industries—including Big Tech—improve
              performance, communication, and decision-making.
            </p>

            {/* Supporting paragraphs (home-friendly, shorter) */}
            <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
              <p>
                She teaches ethical, brain-based sales systems and LinkedIn
                trust-building frameworks that help professionals grow authority
                and close with clarity—without pressure.
              </p>
              <p>
                Shannon also supports founders through Venture Mechanics and
                builds neuroscience-based tools for behavior change and sales
                performance.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
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
                Work With Shannon
              </Link>

              <Link
                href="/speaking"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-6 py-3
                  text-base font-semibold text-slate-900
                  bg-white/80
                  ring-1 ring-black/10
                  transition hover:bg-white
                "
              >
                Speaking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
