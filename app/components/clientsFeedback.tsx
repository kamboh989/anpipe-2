import Link from "next/link";

export default function ProjectUpgradeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* White background + soft gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:120px_100%]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Upgrade Your
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Project Infrastructure
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-700 sm:text-xl">
              Partner with Pakistan’s most trusted steel pipe manufacturer. Get a
              customized quote for your industrial needs today.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex gap-6">
            <Link
              href="#initiate"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-lg font-bold text-white shadow-[0_16px_34px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Initiate <span className="ml-2">→</span>
            </Link>

            <Link
              href="#catalog"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-900 shadow-[0_16px_34px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Catalog <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}