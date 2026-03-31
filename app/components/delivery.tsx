"use client";

import Link from "next/link";

const features = [
  {
    title: "Hardened Reliability",
    desc: "Our pipes are tested to withstand the harshest industrial conditions, ensuring decades of performance.",
    icon: "⬡",
  },
  {
    title: "Engineered Precision",
    desc: "Every millimeter matters. We maintain strict manufacturing tolerances for perfect site integration.",
    icon: "◎",
  },
  {
    title: "Legacy of Trust",
    desc: "Building long-term partnerships through transparent procurement and technical excellence.",
    icon: "⌂",
  },
];

export default function HowDeliveredSection() {
  return (
    <section
      aria-labelledby="how-help-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      id="about"
    >
      {/* soft white + blue grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:120px_100%]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_120px]" />
      <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          {/* LEFT SIDE */}
          <div className="max-w-xl">
            <h2
              id="how-help-title"
              className="text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Forged in
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Established in 1991, A.N Industries has evolved from a local
              manufacturing unit into Pakistan&apos;s premier authority in steel
              pipe and conduit solutions.
            </p>

            <div className="mt-10 space-y-7">
              {features.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="
                      flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-2xl border border-blue-200 bg-blue-50
                      text-lg text-blue-600 shadow-sm
                    "
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold uppercase tracking-tight text-slate-900 sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/#products"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl px-8 py-4
                  text-sm font-bold uppercase tracking-[0.08em] text-white
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  shadow-[0_16px_34px_rgba(37,99,235,0.22)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(37,99,235,0.28)]
                "
              >
                Full Capabilities
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="grid gap-5">
              {/* top images */}
              <div className="grid grid-cols-[1fr_0.7fr] gap-5">
                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <img
                    src="/hero.jpg"
                    alt="Industrial plant structure"
                    className="h-[230px] w-full rounded-[1.5rem] object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                  <img
                    src="/steel-pipe.png"
                    alt="Steel conduit pipes"
                    className="h-[230px] w-full rounded-[1.5rem] object-cover"
                  />
                </div>
              </div>

              {/* milestone card */}
              <div
                className="
                  rounded-[2rem] border border-slate-200
                  bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]
                  p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)]
                "
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-blue-600">
                      Milestone 2026
                    </p>

                    <h3 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-slate-900 sm:text-4xl">
                      Certified to Global Standards
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                      Our commitment to quality is validated by international ISO
                      certifications and the trust of thousands of clients across
                      Pakistan.
                    </p>
                  </div>

                  <div className="hidden sm:flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[10px] border-blue-100 text-3xl text-blue-600">
                    🏅
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}