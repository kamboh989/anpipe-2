import Link from "next/link";

const items = [
  {
    title: (
      <>
        Shift From <span className="text-pink-600">Sell</span> To{" "}
        <span className="text-pink-600">Serve</span>
      </>
    ),
    desc: "Learn how to lead sales conversations with service-first language so buyers feel safe, clear, and ready to move forward.",
  },
  {
    title: (
      <>
        Neuroscience of <span className="text-pink-600">Rejection</span>
      </>
    ),
    desc: "Understand what rejection triggers in the brain and how to stay calm, confident, and persuasive without getting reactive.",
  },
  {
    title: (
      <>
        Regulate Your <span className="text-pink-600">State</span>
      </>
    ),
    desc: "Build the emotional control skills that keep your message sharp—especially in high-stakes conversations and objections.",
  },
  {
    title: (
      <>
        Read The <span className="text-pink-600">Unspoken</span>
      </>
    ),
    desc: "Spot subtle buyer signals, hesitation patterns, and decision blockers so you can respond with clarity instead of pressure.",
  },
];

export default function TrainingInsideSection() {
  return (
    <section
      aria-labelledby="training-inside-title"
      className="py-14 sm:py-18 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* TOP HEADING (center) */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="training-inside-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            What’s <span className="text-pink-600">Inside</span> The{" "}
            <span className="text-pink-600">Training</span>?
          </h2>

          {/* AEO: short direct answer first */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            This training teaches ethical persuasion skills using neuroscience,
            so your team can build trust faster, handle rejection better, and
            close with clarity.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((it, idx) => (
            <article
              key={idx}
              className="
                rounded-2xl bg-white
                p-6 sm:p-7
                border border-pink-300
                border-dashed
                shadow-[0_10px_24px_rgba(0,0,0,0.05)]
                transition
                hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)]
              "
            >
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                {it.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {it.desc}
              </p>
            </article>
          ))}
        </div>

        {/* CTA BUTTON (center) */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/apply"
            className="
              inline-flex items-center justify-center
              rounded-xl px-7 py-3
              text-base font-semibold text-white
              bg-gradient-to-r from-fuchsia-600 to-pink-500
              shadow-[0_12px_26px_rgba(236,72,153,0.18)]
              ring-1 ring-black/5
              transition hover:-translate-y-0.5
            "
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
}
