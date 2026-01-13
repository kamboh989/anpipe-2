const terms = [
  {
    term: "Applied Neuroscience",
    def: "The use of established brain science to influence real-world decisions, communication, and behavior.",
  },
  {
    term: "Threat Response",
    def: "The brain’s automatic protective reaction to perceived risk, scrutiny, or uncertainty.",
  },
  {
    term: "Cognitive Load",
    def: "The mental effort required to process information, make decisions, and manage complexity.",
  },
  {
    term: "Neural Synchrony",
    def: "Alignment between nervous systems that increases trust, rapport, and cooperation.",
  },
  {
    term: "Nervous System Regulation",
    def: "The ability to return to a steady, responsive state after stress.",
  },
  {
    term: "Buyer Hesitation",
    def: "Delay caused by neurological overload, fear of mistakes, or internal risk rather than lack of interest.",
  },
  {
    term: "Decision Fatigue",
    def: "Reduced decision quality after prolonged mental effort or pressure.",
  },
  {
    term: "Power Dynamics",
    def: "How hierarchy, authority, and status influence behavior and stress responses.",
  },
  {
    term: "Toxic Leadership",
    def: "Patterns of behavior that repeatedly activate threat responses in others.",
  },
  {
    term: "Regulated State",
    def: "A neurological condition where clarity, memory, and judgment remain accessible.",
  },
  {
    term: "Change Adoption",
    def: "The process by which the brain integrates new behaviors, systems, or expectations.",
  },
  {
    term: "Resistance to Change",
    def: "A protective brain response to uncertainty, loss of control, or perceived risk.",
  },
  {
    term: "Cognitive Ease",
    def: "When information is processed with minimal effort, increasing trust and comprehension.",
  },
  {
    term: "Emotional Contagion",
    def: "The transfer of emotional states between people through nervous-system mirroring.",
  },
  {
    term: "Predictability",
    def: "The brain’s ability to anticipate what will happen next, which reduces stress.",
  },
  {
    term: "Sales as a Thinking Sport",
    def: "The idea that selling relies on cognition, regulation, and adaptability rather than performance.",
  },
  {
    term: "Micro-Regulation",
    def: "Small, in-the-moment actions that stabilize the nervous system quickly.",
  },
  {
    term: "Decision Safety",
    def: "The feeling that a choice can be justified, defended, and reversed if needed.",
  },
  {
    term: "Revenue System",
    def: "A repeatable process that consistently generates clients and income.",
  },
  {
    term: "Agency",
    def: "The internal sense of choice and control over one’s actions and direction.",
  },
];

export default function DefinitionsSection() {
  return (
    <section
      aria-labelledby="definitions-title"
      className="py-14 sm:py-18 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="definitions-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Definitions{" "}
            <span className="text-pink-600">That Matter</span>
          </h2>

          {/* AEO direct answer */}
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            Clear definitions of key neuroscience terms used across this site—so
            you can apply the concepts without guesswork.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {terms.map((t) => (
            <article
              key={t.term}
              className="
                rounded-2xl bg-white
                p-6 sm:p-7
                border border-dashed border-pink-300
                shadow-[0_10px_24px_rgba(0,0,0,0.05)]
              "
            >
              <h3 className="text-lg font-extrabold text-slate-900">
                {t.term}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-700">
                {t.def}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
