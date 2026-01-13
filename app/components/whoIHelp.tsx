export default function WhoIHelpSection() {
  const groups = [
    {
      title: "Sales Professionals & Revenue Leaders",
      desc: "Who want to move deals forward in uncertain markets by reducing buyer hesitation, pressure, and decision friction.",
    },
    {
      title: "Founders, Coaches & Solopreneurs",
      desc: "Who want to sell, communicate, and lead with confidence—without feeling pushy, performative, or misaligned.",
    },
    {
      title: "Professionals in High-Threat Work Environments",
      desc: "Who want freedom from toxic leadership dynamics while staying grounded, regulated, and intact—without quitting their job.",
    },
    {
      title: "Organizations Leading Change",
      desc: "Who want adoption that lasts beyond training and launch, without burnout, resistance, or silent disengagement.",
    },
  ];

  return (
    <section
      aria-labelledby="who-i-help-title"
      className="py-14 sm:py-18 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="who-i-help-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Who I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-500">
              Help
            </span>
          </h2>

          {/* AEO short answer */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            I work with individuals and organizations navigating pressure,
            uncertainty, and high-stakes decisions.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {groups.map((group, idx) => (
            <article
              key={idx}
              className="
                rounded-2xl bg-white
                p-6 sm:p-7
                border border-dashed border-pink-300
                shadow-[0_10px_24px_rgba(0,0,0,0.05)]
                transition
                hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)]
              "
            >
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                {group.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {group.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
