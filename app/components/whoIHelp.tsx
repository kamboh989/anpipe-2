"use client";

import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Partner Networks" },
  { value: "100%", label: "Product Reliability" },
  { value: "4.9/5", label: "Client Satisfaction" },
  { value: "Top Tier", label: "Materials" },
];

const logos = [
  { src: "/li.png", alt: "Client 1 Logo" },
  { src: "/l2.png", alt: "Client 2 Logo" },
  { src: "/l3.png", alt: "Client 3 Logo" },
  { src: "/l4.png", alt: "Client 4 Logo" },
  { src: "/l5.png", alt: "Client 5 Logo" },
  { src: "/l6.png", alt: "Client 6 Logo" },
  { src: "/l7.png", alt: "Client 7 Logo" },
  { src: "/l8.png", alt: "Client 8 Logo" },
  { src: "/l9.png", alt: "Client 9 Logo" },
  { src: "/l10.jpg", alt: "Client 10 Logo" },
  { src: "/l11.png", alt: "Client 11 Logo" },
  { src: "/l12.png", alt: "Client 12 Logo" },
];

export default function WhoIHelpSection() {
  return (
    <section
      aria-labelledby="who-i-help-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      id="clients"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:120px_100%]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_120px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">
              Our Ecosystem
            </div>

            <h2
              id="who-i-help-title"
              className="mt-5 text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Trust &
              <br />
              <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                Collaboration
              </span>
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-md">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_35px_rgba(15,23,42,0.06)]"
                >
                  <div className="text-2xl font-extrabold text-slate-900">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 max-w-md rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
              <div className="mb-4 flex gap-1 text-blue-600">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                “A.N Industries has been our primary supplier for over a decade.
                Their G.I. pipes are unmatched in quality and durability.”
              </p>

              <div className="mt-5">
                <p className="text-sm font-extrabold uppercase text-slate-900">
                  Mohammad Ali
                </p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                  Lahore Steel Construction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="
                    flex h-[92px] items-center justify-center
                    rounded-[1.4rem] border border-slate-200
                    bg-white px-4
                    shadow-[0_14px_35px_rgba(15,23,42,0.06)]
                  "
                >
                  <div className="relative h-10 w-full">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-md">
                  <h3 className="text-xl font-extrabold uppercase tracking-tight text-slate-900">
                    Become a Partner
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Join Pakistan&apos;s leading network of trusted industrial
                    suppliers, contractors, and infrastructure partners.
                  </p>
                </div>

                <Link
                  href="/#contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl px-6 py-3
                    text-sm font-bold uppercase tracking-[0.08em] text-white
                    bg-gradient-to-r from-blue-600 to-cyan-500
                    shadow-[0_14px_30px_rgba(37,99,235,0.18)]
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(37,99,235,0.24)]
                  "
                >
                  Register Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}