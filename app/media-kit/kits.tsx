"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

const kits = [
  {
    title: "Speaker Media Kit",
    desc: "Bio, intro copy, keynote topics, and event logistics for conferences and corporate events.",
    preview: "/mediaKit/p1.png",
    download: "/mediaKit/p1.png",
  },
  {
    title: "Corporate Training Kit",
    desc: "Training overview, workshop options, outcomes, and customization details for organizations.",
    preview: "/mediaKit/p2.png",
    download: "/mediaKit/p2.png",
  },
  {
    title: "Podcast & Interview Kit",
    desc: "Host-ready bio, talking points, suggested questions, and interview assets.",
    preview: "/mediaKit/p3.png",
    download: "/mediaKit/p3.png",
  },
  {
    title: "Brand & Partnership Kit",
    desc: "Brand positioning, collaboration opportunities, audience alignment, and partnership details.",
    preview: "/mediaKit/p4.jpeg",
    download: "/mediaKit/p4.jpeg",
  },
];

export default function MediaKitsPreviewSection() {
  const cardInitial = { opacity: 0, y: 18 };
  const cardInView = { opacity: 1, y: 0 };
  const cardTransition = { duration: 0.6, ease: "easeOut" as const };

  return (
    <section
      aria-labelledby="media-kits-preview-title"
      className="
        py-16 sm:py-20
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2
            id="media-kits-preview-title"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Media Kit <span className="text-pink-600">Previews</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700">
            Preview each media kit below. Download the kit you need to quickly
            introduce Shannon, select topics, and plan a successful event.
          </p>
        </div>

        {/* Kits */}
        <div className="mt-12 space-y-12">
          {kits.map((k, idx) => (
            <motion.article
              key={k.title}
              initial={cardInitial}
              whileInView={cardInView}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ ...cardTransition, delay: idx * 0.12 }}
              className="
                group
                rounded-3xl bg-white/70 backdrop-blur
                ring-1 ring-black/5
                shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                overflow-hidden
              "
            >
              <div className="grid gap-8 lg:grid-cols-2">
                {/* LEFT: Preview */}
                <div className="relative bg-white">
                  <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
                    <Image
                      src={k.preview}
                      alt={`${k.title} preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 720px"
                      className="
                        object-contain
                        p-4 sm:p-6
                        transition-transform duration-500
                        group-hover:scale-[1.01]
                      "
                      priority={false}
                    />
                  </div>

                  <div
                    aria-hidden="true"
                    className="
                      absolute left-6 right-6 bottom-0 h-[3px]
                      rounded-full
                      bg-gradient-to-r from-fuchsia-600 via-pink-500 to-orange-400
                      opacity-80
                    "
                  />
                </div>

                {/* RIGHT: Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {k.title}
                  </h3>

                  <p className="mt-3 text-base sm:text-lg text-slate-700 leading-relaxed">
                    {k.desc}
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <a
                      href={k.download}
                      download
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-xl px-6 py-3
                        text-base font-semibold text-white
                        bg-gradient-to-r from-fuchsia-600 to-pink-500
                        shadow-[0_12px_26px_rgba(236,72,153,0.18)]
                        ring-1 ring-black/5
                        transition hover:-translate-y-0.5
                      "
                    >
                      <Download className="h-5 w-5" />
                      Download PNG
                    </a>

                    <a
                      href={k.preview}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center justify-center gap-2
                        rounded-xl px-6 py-3
                        text-base font-semibold text-slate-900
                        bg-white
                        ring-1 ring-black/10
                        transition hover:bg-slate-50
                      "
                    >
                      <ExternalLink className="h-5 w-5" />
                      Open Full Preview
                    </a>
                  </div>

                  <p className="mt-4 text-sm text-slate-600">
                    Tip: Click “Open Full Preview” for full-size viewing.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
