import Image from "next/image";

export default function ProgramObjectivesSection() {
  return (
    <section
      aria-labelledby="program-objectives-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-5xl px-4">
        <div
          className="
            grid gap-8 md:grid-cols-2
            items-center
            rounded-2xl
            border border-dashed border-pink-300
            bg-white/70
            p-3 sm:p-8
            shadow-[0_10px_24px_rgba(0,0,0,0.05)]
          "
        >
          {/* LEFT IMAGE */}
          <div className="relative w-full h-[310px] sm:h-[430px] rounded-xl overflow-hidden">
            <Image
              src="/program.jpeg"
              alt="Neuroscience-based sales training objectives"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2
              id="program-objectives-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Program{" "}
              <span className="text-pink-600">
                Objectives
              </span>
            </h2>

            {/* AEO: direct answer */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
              The objective of this training is to help sales professionals
              understand how the brain makes buying decisions so they can sell
              with confidence, clarity, and connection—without pressure
            </p>

            {/* Bullet points */}
            <ul className="mt-5 space-y-3 text-slate-800">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Improve sales team performance fast
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                 Build trust with ethical influence and cognitive triggers
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Recover from rejection without burnout
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Read nonverbal buyer signals with accuracy
                </span>
              </li>

              
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Shift from pitching to solving
                </span>
              </li>

              
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Turn LinkedIn and DMs into a reliable lead engine
                </span>
              </li>

              
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                   Sell through clarity instead of pressure
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
