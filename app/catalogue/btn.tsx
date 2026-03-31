import Link from "next/link";

export default function UpgradeCTASection() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      {/* soft blue background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)]" />
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="
            flex flex-col gap-8 md:flex-row md:items-center md:justify-between
            rounded-[2rem]
            border border-slate-200
            bg-[linear-gradient(120deg,#ffffff_0%,#f8fbff_100%)]
            p-8 sm:p-10
            shadow-[0_20px_50px_rgba(15,23,42,0.08)]
          "
        >
          {/* LEFT */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              Upgrade Your
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Project Infrastructure
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base leading-7 text-slate-600">
              Partner with Pakistan&apos;s most trusted steel pipe manufacturer.
              Get a customized quote for your industrial needs today.
            </p>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="
                inline-flex items-center justify-center gap-2
                rounded-xl px-6 py-3
                text-sm font-bold uppercase tracking-[0.08em]
                text-white
                bg-gradient-to-r from-blue-600 to-cyan-500
                shadow-[0_14px_30px_rgba(37,99,235,0.25)]
                transition hover:-translate-y-0.5
              "
            >
              Initiate →
            </Link>

           
          </div>
        </div>
      </div>
    </section>
  );
}