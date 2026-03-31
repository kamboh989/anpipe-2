"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "/ct1.jpg",
    title: "G.I. Pipes Catalogue",
    subtitle: "Master Catalog 2026",
    description:
      "Explore our comprehensive range of industrial piping solutions, technical specifications, and international standard compliance tables.",
  },
  {
    id: 2,
    image: "/ct2.jpg",
    title: "M.S. Pipes Catalogue",
    subtitle: "Master Catalog 2026",
    description:
      "Detailed product dimensions, structural applications, and manufacturing specifications for industrial-grade steel pipe systems.",
  },
  {
    id: 3,
    image: "/ct3.jpg",
    title: "Scaffolding Tube Catalogue",
    subtitle: "Master Catalog 2026",
    description:
      "Browse our complete scaffolding range with durability specs, sizing details, and technical compliance information.",
  },
//   {
//     id: 4,
//     image: "/catalogue/catalogue-4.png",
//     title: "Technical Specifications",
//     subtitle: "Master Catalog 2026",
//     description:
//       "Access essential engineering data, standards references, and technical documentation for project planning and procurement.",
//   },
];

export default function DigitalInventoryHero() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[current];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* background */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:120px_100%]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_120px]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/80 blur-3xl" />
      <div className="absolute right-10 top-32 h-56 w-56 rounded-full border-[24px] border-blue-100/70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.30em] text-blue-600">
              Master Catalog 2026
            </span>
            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h1 className="text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
            Digital
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Inventory
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {activeSlide.description}
          </p>
        </div>

        {/* slider preview */}
        <div className="mx-auto mt-12 max-w-5xl">
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
            <div className="relative overflow-hidden rounded-[1.7rem] bg-slate-100">
              <div className="relative h-[260px] sm:h-[380px] lg:h-[520px] w-full">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* overlay title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent px-5 pb-5 pt-14 sm:px-7 sm:pb-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-300">
                  Slide {current + 1}
                </p>
                <h2 className="mt-2 text-xl font-extrabold uppercase text-white sm:text-3xl">
                  {activeSlide.title}
                </h2>
              </div>

              {/* arrows */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/80 text-slate-900 shadow-lg backdrop-blur transition hover:scale-105"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/80 text-slate-900 shadow-lg backdrop-blur transition hover:scale-105"
              >
                →
              </button>

              {/* slide counter */}
              <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 rounded-full bg-slate-900/70 px-5 py-3 text-white backdrop-blur">
                <button
                  onClick={prevSlide}
                  className="text-lg leading-none text-white/80 transition hover:text-white"
                >
                  ‹
                </button>
                <div className="text-center">
                  <div className="text-sm font-bold">{current + 1}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                    Page
                  </div>
                </div>
                <button
                  onClick={nextSlide}
                  className="text-lg leading-none text-white/80 transition hover:text-white"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

         

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-blue-600"
                    : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}