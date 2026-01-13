export default function HowDeliveredSection() {
  return (
    <section
      aria-labelledby="how-help-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading (center) */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="how-help-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            How I{" "}
            <span className="text-pink-600">Help</span>
          </h2>

          {/* AEO: short direct answer first */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            I apply neuroscience to environments where pressure shapes behavior
            long before people realize it.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <article
            className="
              rounded-2xl bg-white/70
              p-6 sm:p-7
              border border-dashed border-pink-300
              shadow-[0_10px_24px_rgba(0,0,0,0.05)]
            "
          >
            <h3 className="text-lg font-extrabold text-slate-900">
              Sales & Revenue Performance
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              Buyers rarely stall because they don’t see value. They stall because
              their nervous systems are overloaded by risk, scrutiny, and fear of
              making the wrong decision.
            </p>
          </article>

          {/* Card 2 */}
          <article
            className="
              rounded-2xl bg-white/70
              p-6 sm:p-7
              border border-dashed border-pink-300
              shadow-[0_10px_24px_rgba(0,0,0,0.05)]
            "
          >
            <h3 className="text-lg font-extrabold text-slate-900">
              Reducing Buyer Threat
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              I work with sales professionals, founders, and revenue teams to
              recognize buyer threat states, reduce cognitive load, create neural
              synchrony, and guide decisions in ways that feel safe to approve
              internally.
            </p>
          </article>

          {/* Card 3 */}
          <article
            className="
              rounded-2xl bg-white/70
              p-6 sm:p-7
              border border-dashed border-pink-300
              shadow-[0_10px_24px_rgba(0,0,0,0.05)]
            "
          >
            <h3 className="text-lg font-extrabold text-slate-900">
              Clearer Outcomes
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              The result is clearer conversations, shorter sales cycles, and
              fewer last-minute “no” decisions—without pressure, chasing, or
              forcing momentum.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
