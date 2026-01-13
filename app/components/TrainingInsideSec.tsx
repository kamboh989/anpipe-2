import Link from "next/link";

const items = [
  {
    title: (
      <>
        Building Your{" "}
        <span className="text-pink-600">Exit</span> From{" "}
        <span className="text-pink-600">Corporate</span>
      </>
    ),
    desc: (
      <>
        Many professionals want to leave corporate environments but struggle to
        turn experience into consistent income. I help solopreneurs and coaches
        build a business foundation <strong>before</strong> they exit—creating a
        clear offer, monetizing LinkedIn, and developing a repeatable,
        brain-based sales system that replaces salary with confidence and
        momentum.
      </>
    ),
  },
  {
    title: (
      <>
        Navigating{" "}
        <span className="text-pink-600">Toxic Leadership</span> &{" "}
        <span className="text-pink-600">Power Dynamics</span>
      </>
    ),
    desc: (
      <>
        Toxic leadership environments hijack attention, memory, and emotional
        regulation. This work helps professionals remain clear, grounded, and
        intact while dealing with unpredictable or destabilizing bosses. The
        goal is not confrontation—it’s internal control, stability, and recovery
        without long-term damage to health or identity.
      </>
    ),
  },
  {
    title: (
      <>
        Organizational{" "}
        <span className="text-pink-600">Change</span> &{" "}
        <span className="text-pink-600">Adoption</span>
      </>
    ),
    desc: (
      <>
        Most change initiatives fail because the brain resists uncertainty and
        loss of control. I work with leaders to identify resistance patterns,
        reduce neural friction, and design communication and training the brain
        can actually integrate—so change sticks beyond rollout and burnout is
        reduced.
      </>
    ),
  },
];

export default function TrainingInsideSection() {
  return (
    <section
      aria-labelledby="training-inside-title"
      className="py-14 sm:py-18 bg-white"
    >
      <div className="mx-auto max-w-5xl px-4">
        {/* TOP HEADING */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="training-inside-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            How I{" "}
            <span className="text-pink-600">Apply</span>{" "}
            Neuroscience
          </h2>

          {/* AEO: short direct answer */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            This work applies neuroscience to environments where pressure,
            uncertainty, and power dynamics shape behavior long before people
            realize it.
          </p>
        </div>
{/* CARDS GRID */}
<div className="mt-10 grid gap-6 sm:grid-cols-2">
  {items.map((it, idx) => (
    <article
      key={idx}
      className={`
        rounded-2xl bg-white
        p-6 sm:p-7
        border border-pink-300 border-dashed
        shadow-[0_10px_24px_rgba(0,0,0,0.05)]
        transition
        hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(0,0,0,0.07)]
        ${
          idx === 2
            ? "sm:col-span-2 max-w-xl mx-auto" // 👈 3rd card center
            : ""
        }
      `}
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


        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/contact"
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
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
