"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    badge: "ISO 9001:2008 Certified",
    title: "Leading Steel Pipe Manufacturer",
    description:
      "Delivering premium quality steel pipes and tubes since 1991. Trusted by industry leaders across Pakistan.",
    buttonText: "View Products",
    href: "#products",
  },
  {
    badge: "Extensive Range",
    title: "Precision Product Engineering",
    description:
      "From galvanized iron to ERW steel and scaffolding tubes, our range meets every project requirement.",
    buttonText: "Explore Range",
    href: "#range",
  },
  {
    badge: "Global Logistics",
    title: "Secure & Timely Delivery",
    description:
      "With an efficient global supply chain, we ensure your orders arrive safely and promptly.",
    buttonText: "Contact Us",
    href: "#contact",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableHeight = rect.height - viewportHeight;

      if (scrollableHeight <= 0) {
        setActiveSlide(0);
        return;
      }

      const progress = Math.min(
        Math.max((-rect.top / scrollableHeight), 0),
        0.9999
      );

      const nextSlide = Math.min(
        slides.length - 1,
        Math.floor(progress * slides.length)
      );

      setActiveSlide((prev) => (prev === nextSlide ? prev : nextSlide));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {/* Background blur effects */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#eff6ff_35%,#dbeafe_65%,#ffffff_100%)]" />

        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute top-1/3 left-[-80px] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute bottom-[-60px] right-[-40px] h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />

        {/* Slides */}
        <div className="relative h-full w-full">
         {slides.map((slide, index) => {
  const isActive = activeSlide === index;
  const isPassed = index < activeSlide;
  const isFirst = index === 0;

  return (
    <div
      key={slide.title}
      className={`absolute inset-0 px-4 transition-all duration-700 ease-out ${
        isActive
          ? "opacity-100 translate-y-0 scale-100"
          : isPassed
          ? "pointer-events-none opacity-0 -translate-y-16 scale-95"
          : "pointer-events-none opacity-0 translate-y-16 scale-105"
      } ${isFirst ? "flex items-start justify-center pt-20 sm:pt-24 lg:pt-28" : "flex items-center justify-center"}`}
    >
      <div className={`mx-auto text-center ${isFirst ? "max-w-3xl" : "max-w-4xl"}`}>
        <div className="inline-flex items-center rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
          {slide.badge}
        </div>

        <h1
          className={`mt-6 font-extrabold leading-tight tracking-tight text-slate-900 ${
            isFirst
              ? "text-3xl sm:text-4xl lg:text-5xl"
              : "text-4xl sm:text-5xl lg:text-6xl"
          }`}
        >
          <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
            {slide.title}
          </span>
        </h1>

        <p
          className={`mx-auto mt-5 leading-relaxed text-slate-700 ${
            isFirst
              ? "max-w-xl text-[15px] sm:text-base"
              : "max-w-2xl text-base sm:text-lg lg:text-xl"
          }`}
        >
          {slide.description}
        </p>

        <div className="mt-8">
          <Link
            href={slide.href}
            className="
              inline-flex items-center justify-center
              rounded-xl px-6 py-3.5
              text-base font-semibold text-white
              bg-gradient-to-r from-blue-600 to-cyan-500
              shadow-[0_12px_30px_rgba(37,99,235,0.22)]
              ring-1 ring-black/5
              transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(37,99,235,0.28)]
            "
          >
            {slide.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
})}
        </div>

        {/* Bottom indicators */}
        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-8 bg-blue-600"
                  : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}