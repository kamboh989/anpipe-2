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
          Coached and trained 200k+ employees at multiple fortune 500 companies
        </p>

        {/* Key credibility points */}
        <div className="mt-8 space-y-6 max-w-4xl">
          <p className="text-base sm:text-lg text-slate-800">
           Helped hundreds of solopreneurs and startup founders improve sales confidence and be better at sales
           <br />
- First sale within 30 days
<br />
- 225% increase in 3 months 
<br />

Delivered 300+ live workshops and trainings
          </p>

         

          <p className="text-base sm:text-lg text-slate-800">
           Trusted by leaders across tech, retail, power, energy, telecom and more
          </p>

        
        </div>
      </div>
    </section>
  );
}
