import React from "react";

const infoCards = [
  {
    title: "Manufacturing Hub",
    value: "Plot 123, Industrial Area, Karachi",
    small: "Our primary production facility.",
    icon: "location",
  },
  {
    title: "Direct Connect",
    value: "+92 300 1234567",
    small: "Mon-Fri, 10am - 6pm PKT",
    icon: "phone",
  },
  {
    title: "Digital Inquiry",
    value: "info@anindustries.com.pk",
    small: "Response within 24 hours.",
    icon: "mail",
  },
  {
    title: "Operational Hours",
    value: "09:00–18:00",
    small: "Closed on Sundays.",
    icon: "clock",
  },
];

function CardIcon({ type }: { type: string }) {
  const base =
    "flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600";

  if (type === "location") {
    return (
      <div className={base}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
          <circle cx="12" cy="11" r="2.5" />
        </svg>
      </div>
    );
  }

  if (type === "phone") {
    return (
      <div className={base}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.35 2.44a2 2 0 0 1-.57 1.69L7.1 9.66a16 16 0 0 0 7.24 7.24l1.81-1.79a2 2 0 0 1 1.69-.57l2.44.35A2 2 0 0 1 22 16.92Z" />
        </svg>
      </div>
    );
  }

  if (type === "mail") {
    return (
      <div className={base}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <path d="M4 6h16v12H4z" />
          <path d="m4 8 8 6 8-6" />
        </svg>
      </div>
    );
  }

  return (
    <div className={base}>
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v5l3 2" />
      </svg>
    </div>
  );
}

export default function ProjectAnalysisSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24" id="contact">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:120px_100%]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_120px]" />
      <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Project
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Analysis
            </span>
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left side */}
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {infoCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)]"
                  >
                    <CardIcon type={card.icon} />
                    <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                      {card.title}
                    </p>
                    <p className="mt-2 text-base font-extrabold leading-6 text-slate-900">
                      {card.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {card.small}
                    </p>
                  </div>
                ))}
              </div>

              
            </div>

            {/* Right side form */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-slate-500 stroke-2">
                      <path d="M20 21a8 8 0 0 0-16 0" />
                      <circle cx="12" cy="8" r="4" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Engineering Dept."
                      className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    Email Address
                  </label>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-slate-500 stroke-2">
                      <path d="M4 6h16v12H4z" />
                      <path d="m4 8 8 6 8-6" />
                    </svg>
                    <input
                      type="email"
                      placeholder="office@company.com"
                      className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="G.I. Pipe Procurement"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  Detailed Message
                </label>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <textarea
                    rows={5}
                    placeholder="Requirements..."
                    className="w-full resize-none bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_16px_34px_rgba(37,99,235,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(37,99,235,0.28)]"
              >
                Submit Protocol
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}