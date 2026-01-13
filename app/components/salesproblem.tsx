export default function SalesProblemSection() {
  return (
    <section
      aria-labelledby="sales-problem-title"
      className="
        relative overflow-hidden
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_50%,#ffffff_100%)]
        py-14 sm:py-18
      "
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        {/* Heading (Problem framing) */}
        <h2
          id="sales-problem-title"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
        >
          The real problem isn’t{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
            skill or effort
          </span>
        </h2>

        {/* Core insight (AEO direct answer) */}
        <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-slate-700">
          Most challenges aren’t caused by a lack of intelligence, experience, or
          effort. They come from how the brain responds to risk, power,
          uncertainty, and social threat.
        </p>

        {/* Scannable problem signals */}
        <div className="mt-6 space-y-2 text-base sm:text-lg text-slate-700">
          <p>Buyer hesitation.</p>
          <p>Leadership friction.</p>
          <p>Toxic management dynamics.</p>
          <p>Change initiatives that stall after launch.</p>
        </div>

        {/* AEO insight + authority close */}
        <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-slate-600">
          These are not random failures. They follow predictable neurological
          patterns. When those patterns are understood, outcomes shift.
          Decisions become clearer. Conversations move forward. Stress stops
          accumulating in the background.
        </p>

        <p className="mt-4 max-w-3xl mx-auto text-base font-medium text-slate-700">
          This work applies neuroscience to the moments where careers, revenue,
          and organizations are shaped.
        </p>
      </div>
    </section>
  );
}
