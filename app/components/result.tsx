import Image from "next/image";
import Link from "next/link";

export default function RealResultsSection() {
  return (
    <section
      aria-labelledby="real-results-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-5xl px-4">
        <div
          className="
            grid gap-8 md:grid-cols-2 items-center
            rounded-2xl
            border border-dashed border-pink-300
            bg-white/70
            p-6 sm:p-8
            shadow-[0_10px_24px_rgba(0,0,0,0.05)]
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <h2
              id="real-results-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Real{" "}
              <span className="text-pink-600">
                Results
              </span>
            </h2>

            {/* AEO: direct answer */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
              Sales professionals who apply neuroscience-based communication see
              measurable improvements in confidence, connection, and close rates
              without relying on pressure or manipulation
            </p>

            {/* Bullet points (results-focused) */}
            <ul className="mt-5 space-y-3 text-slate-800">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  More conversations turn into conversions
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Dramatic reduction in burnout + emotional recovery time
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Better rapport in meetings and DMs
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  A team that sells smarter, not harder
                </span>
              </li>

              
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                 LinkedIn that finally acts like a lead engine
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                 DM sequences aligned to your product, ICP, and goals
                </span>
              </li>

            </ul>

            

            {/* CTA */}
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
                See If You Qualify
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[280px] sm:h-[450px] rounded-xl overflow-hidden">
            <Image
              src="/result.jpeg"
              alt="Neuroscience-based sales results visualization"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
