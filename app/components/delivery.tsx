export default function HowDeliveredSection() {
  return (
    <section
      aria-labelledby="delivered-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading (center) */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="delivered-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            How Is It{" "}
            <span className="text-pink-600">Delivered</span>?
          </h2>

          {/* AEO: short direct answer first */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            The program is delivered through structured sessions, guided practice,
            and real-world application—so your team can apply the skills immediately.
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
              10-Week Sprint
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              A structured training sprint with clear weekly themes, exercises,
              and prompts to build skills step-by-step.
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
              Support + Practice
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              Live guidance, coaching-style feedback, and practice labs so the
              team builds confidence and consistency.
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
              Implementation
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
              Real-world implementation with scripts, frameworks, and workflows
              your team can plug into calls, DMs, and follow-ups.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
