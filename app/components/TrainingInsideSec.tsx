"use client";

import Link from "next/link";

export default function TrainingInsideSection() {
  return (
    <section
      aria-labelledby="training-inside-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* soft background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" />
      <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT IMAGE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <div className="overflow-hidden rounded-[1.5rem]">
                <img
                  src="/ms-pipe.png"
                  alt="Industrial steel pipes in factory"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-blue-200 bg-blue-50 text-3xl text-blue-600 shadow-sm">
                →
              </div>

              <div className="relative h-28 w-28">
                <div className="absolute inset-0 rounded-full border-[18px] border-blue-600/90" />
              </div>
            </div>

            <div className="-mt-6 mb-5 flex items-center gap-3">
              <span className="text-4xl font-extrabold text-blue-700">02</span>
              <span className="h-px w-10 bg-blue-200" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                Core Value
              </span>
            </div>

            <h2
              id="training-inside-title"
              className="text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Structural
              <br />
              Integrity
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              M.S. pipes engineered for maximum load-bearing capacity, ensuring
              the safety and stability of large-scale infrastructure projects.
            </p>

            <div className="mt-8">
              <Link
                href="#products"
                className="
                  inline-flex items-center gap-3
                  rounded-2xl px-8 py-4
                  text-base font-bold uppercase tracking-wide text-white
                  bg-gradient-to-r from-blue-600 to-blue-500
                  shadow-[0_16px_34px_rgba(37,99,235,0.22)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(37,99,235,0.28)]
                "
              >
                Capability
                <span className="text-xl leading-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}