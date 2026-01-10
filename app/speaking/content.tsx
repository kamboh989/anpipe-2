export default function ContactAuthoritySection() {
  return (
    <section
      aria-labelledby="contact-authority-title"
      className="py-14 sm:py-18"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <h2
          id="contact-authority-title"
          className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
        >
          Contact{" "}
          <span className="text-pink-600">
            Shannon Smith, J.D., M.S.
          </span>
        </h2>

        {/* AEO direct answer */}
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700">
          Shannon Smith is a neuroscience-based sales and communication trainer who
          has coached over <strong>200,000 professionals</strong> across Fortune
          500 companies, startups, and solo founders worldwide.
        </p>

        {/* Key credibility points */}
        <div className="mt-8 space-y-6 max-w-4xl">
          <p className="text-base sm:text-lg text-slate-800">
            She has helped hundreds of solopreneurs and startup founders build
            sales confidence, close their first deals, and create repeatable,
            ethical sales systems.
          </p>

          {/* Results list */}
          <ul className="space-y-3 text-slate-800">
            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
              <span>
                Achieved a <strong>first sale within 30 days</strong> for new founders.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
              <span>
                Drove an average <strong>225% revenue increase in 3 months</strong>.
              </span>
            </li>
          </ul>

          <p className="text-base sm:text-lg text-slate-800">
            Shannon has delivered over <strong>300 live workshops and trainings</strong>,
            helping teams improve communication, emotional regulation, and
            decision-making under pressure.
          </p>

          <p className="text-base sm:text-lg text-slate-800">
            Her work is trusted by leaders across <strong>technology, retail,
            power, energy, telecom</strong>, and other high-performance industries.
          </p>
        </div>
      </div>
    </section>
  );
}
