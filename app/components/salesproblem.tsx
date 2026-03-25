import Image from "next/image";
import Link from "next/link";

export default function SalesProblemSection() {
  return (
    <section
      aria-labelledby="sales-problem-title"
      className="relative overflow-hidden bg-[#020817] py-16 sm:py-20 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_35%),linear-gradient(180deg,#020817_0%,#020b1f_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:140px_100%]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_140px]" />

      {/* Decorative blur */}
      <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute right-[12%] top-24 h-36 w-36 rounded-full border-[18px] border-blue-600/50" />
      <div className="absolute bottom-16 left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top content */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-300 backdrop-blur">
            Precision & Innovation
          </div>

          <h2
            id="sales-problem-title"
            className="mt-5 text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Engineered for
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Peak Performance
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Since 1991, we have been delivering uncompromised quality in steel
            pipe manufacturing, setting international benchmarks for durability
            and structural integrity.
          </p>
        </div>

        {/* Bottom content */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <div className="max-w-md">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-2xl text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.18)] backdrop-blur">
                →
              </div>
            </div>

            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl font-bold text-blue-700/80">01</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-300">
                Core Value
              </span>
            </div>

            <h3 className="text-4xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-5xl">
              Galvanized
              <br />
              Excellence
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
              Our high-precision G.I. pipes offer superior corrosion resistance
              and structural longevity, perfect for demanding industrial
              environments.
            </p>

            <div className="mt-8">
              <Link
                href="#products"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_14px_32px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
              >
                Capability
                <span className="text-lg leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-white/5 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_60px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/iron-pipe.png"
                  alt="Galvanized steel pipes stacked in an industrial yard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}