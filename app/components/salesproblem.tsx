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
        {/* Question heading (AEO trigger) */}
        <h2
          id="sales-problem-title"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
        >
          What if your sales team could{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
            close more
          </span>{" "}
          without getting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
            ghosted
          </span>
          ?
        </h2>

        {/* Direct short answer (VERY important for AEO) */}
        <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-slate-700">
          Sales teams lose deals not because of price or skill—but because buyers
          feel pressured, confused, or emotionally disconnected during the
          decision process.
        </p>

        {/* Supporting explanation */}
        <p className="mt-3 max-w-3xl mx-auto text-base text-slate-600">
          Ethical persuasion and neuroscience-based communication help sellers
          build trust, reduce resistance, and keep conversations moving forward
          without chasing or pushing prospects.
        </p>
      </div>
    </section>
  );
}
