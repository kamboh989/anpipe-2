"use client";

import Image from "next/image";
import { Download } from "lucide-react";

type Kit = {
  title: string;
  desc: string;
  preview: string;
  download: string;
};

const kits: Kit[] = [
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
  return (
    <section
      aria-labelledby="media-kits-preview-title"
      className="py-10 bg-white overflow-x-hidden"
    >
      <div className="mx-auto max-w-6xl px-4">
        
       

        {/* Kits */}
        <div className="mt-12 space-y-16">
          {kits.map((k, idx) => {
            const kitNo = idx + 1;

            return (
              <article key={k.title} className="overflow-visible ">
                {/* KIT IMAGE CENTER */}
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl relative">
                    {/* DOWNLOAD BUTTON
                        Mobile: centered under image
                        Laptop+: top-right corner overlay
                    */}
                    <a
                      href={k.download}
                      download
                      className="
                        relative mt-4  w-fit
                        inline-flex items-center justify-center gap-2
                        rounded-full px-5 sm:px-6 py-2.5
                        text-xs sm:text-sm font-extrabold text-white
                        bg-pink-600
                        shadow-[0_10px_22px_rgba(236,72,153,0.28)]
                        hover:bg-pink-700 transition

                        lg:absolute lg:mt-0
                        lg:top-4 lg:right-[-150px]
                        lg:z-10
                      "
                      aria-label={`Download ${k.title} - Kit Page ${kitNo}`}
                    >
                      <Download className="h-4 w-4" />
                      <span className="hidden sm:inline">DOWNLOAD MEDIA KIT</span>
                      <span className="sm:hidden">DOWNLOAD</span>

                      <span className="ml-2 rounded-full bg-white/15 px-2 py-0.5 text-xs font-bold">
                        {kitNo}
                      </span>
                    </a>

                    {/* IMAGE */}
                    <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[890px]">
                      <Image
                        src={k.preview}
                        alt={`${k.title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 950px"
                        className="object-contain"
                        priority={false}
                      />
                    </div>
                  </div>
                </div>

                {/* FORM UNDER EACH KIT */}
                <div className="mt-10 max-w-4xl mx-auto">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="grid gap-4 sm:grid-cols-2"
                    aria-label={`Request form for ${k.title}`}
                  >
                    <div className="sm:col-span-1">
                      <label className="block text-sm font-semibold text-slate-800">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name={`fullName_${kitNo}`}
                        placeholder="Enter your full name"
                        className="
                          mt-2 w-full rounded-xl
                          border border-slate-300 bg-white
                          px-4 py-3 text-slate-900
                          outline-none
                          focus:border-pink-500 focus:ring-4 focus:ring-pink-100
                        "
                        required
                      />
                    </div>

                    <div className="sm:col-span-1">
                      <label className="block text-sm font-semibold text-slate-800">
                        Email
                      </label>
                      <input
                        type="email"
                        name={`email_${kitNo}`}
                        placeholder="Enter your email"
                        className="
                          mt-2 w-full rounded-xl
                          border border-slate-300 bg-white
                          px-4 py-3 text-slate-900
                          outline-none
                          focus:border-pink-500 focus:ring-4 focus:ring-pink-100
                        "
                        required
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-slate-800">
                        Event Detail
                      </label>
                      <textarea
                        name={`eventDetail_${kitNo}`}
                        placeholder="Tell us about your event (date, audience, format, goals...)"
                        rows={4}
                        className="
                          mt-2 w-full rounded-xl
                          border border-slate-300 bg-white
                          px-4 py-3 text-slate-900
                          outline-none
                          focus:border-pink-500 focus:ring-4 focus:ring-pink-100
                        "
                        required
                      />
                    </div>

                    <div className="sm:col-span-2 flex justify-center pt-2">
                      <button
                        type="submit"
                        className="
                          rounded-xl px-7 py-3
                          text-base font-semibold text-white
                          bg-gradient-to-r from-fuchsia-600 to-pink-500
                          ring-1 ring-black/5
                          transition hover:-translate-y-0.5
                        "
                      >
                        Submit Event Request (Kit Page {kitNo})
                      </button>
                    </div>
                  </form>
                </div>

                {/* Divider */}
                <div className="mt-14 h-px w-full bg-slate-200" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

