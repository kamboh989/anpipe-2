"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ContentImageAEOSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Smooth reveal on scroll (light, professional)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="corporate-speaker-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          ref={ref}
          className={`
            grid gap-10 lg:grid-cols-2 items-center
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          {/* LEFT: IMAGE */}
          <div
            className={`
              flex justify-center lg:justify-start
              transition-all duration-700 ease-out delay-100
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
            `}
          >
            <Image
              src="/speak/content.png"
              alt="Shannon Smith delivering a corporate keynote"
              width={560}
              height={460}
              className="
                rounded-2xl
                object-contain
                max-h-[300px] sm:max-h-[360px] lg:max-h-[440px]
                w-auto
              "
            />
          </div>

          {/* RIGHT: CONTENT */}
          <div
            className={`
              transition-all duration-700 ease-out delay-150
              ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
            `}
          >
            {/* AEO Heading */}
            <h2
              id="corporate-speaker-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              A{" "}
              <span className="text-pink-600">
                Corporate Keynote Speaker
              </span>{" "}
              Who Drives Real Results
            </h2>

            {/* UPDATED AEO CONTENT */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-2xl">
              Shannon Smith is a sought-after corporate keynote speaker known for
              translating cutting-edge neuroscience into practical, high-ROI
              strategies for sales teams, leaders, and organizations. Recognized
              across industries, she delivers engaging, high-energy keynotes
              that transform how people think, sell, lead, and perform.
            </p>

            {/* Supporting value bullets */}
            <ul className="mt-6 space-y-3 text-slate-800 max-w-2xl">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Turns complex brain science into clear, usable frameworks.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Delivers high-energy keynotes that keep audiences engaged and focused.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-pink-600" />
                <span>
                  Creates measurable performance improvements without pressure tactics.
                </span>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/speaking-inquiries"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-6 py-3
                  text-base font-semibold text-white
                  bg-gradient-to-r from-fuchsia-600 to-pink-500
                  shadow-[0_12px_26px_rgba(236,72,153,0.18)]
                  ring-1 ring-black/5
                  transition hover:-translate-y-0.5
                "
              >
                Request Speaking Information
              </Link>

              
            </div>

            {/* Micro credibility line */}
            <p className="mt-4 text-sm text-slate-600">
              Ideal for conferences, leadership summits, and corporate sales teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
