"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/speak/s1.jpg", alt: "Keynote moment on stage" },
  { src: "/speak/s2.jpg", alt: "Workshop training with teams" },
  { src: "/speak/s3.jpg", alt: "Audience engagement during talk" },
  { src: "/speak/s4.jpg", alt: "Corporate event speaking session" },
  { src: "/speak/s5.png", alt: "Panel discussion / fireside chat" },
];

export default function SpeakingGallerySection() {
  const list = images.filter(Boolean).slice(0, 5);

  const itemInitial = { opacity: 0, y: 18, scale: 0.98 };
  const itemInView = { opacity: 1, y: 0, scale: 1 };
  const itemTransition = { duration: 0.55, ease: "easeOut" as const };

  return (
    <section
      aria-labelledby="gallery-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Gallery */}
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="grid gap-5">
            {list.slice(0, 3).map((img, idx) => (
              <motion.figure
                key={img.src}
                initial={itemInitial}
                whileInView={itemInView}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ ...itemTransition, delay: idx * 0.12 }}
                className={`
                  group relative overflow-hidden rounded-2xl
                  ring-1 ring-black/10 bg-white
                  shadow-[0_12px_26px_rgba(0,0,0,0.06)]
                  ${idx === 0 ? "aspect-[16/10]" : "aspect-[16/11]"}
                `}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="
                    object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.04]
                  "
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />
                <figcaption className="absolute bottom-3 left-4 right-4 text-sm text-white/90" />
              </motion.figure>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-5 lg:pt-10">
            {list.slice(3, 5).map((img, idx) => {
              const delayBase = 3; // left side had 0,1,2 — now start at 3
              return (
                <motion.figure
                  key={img.src}
                  initial={itemInitial}
                  whileInView={itemInView}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ ...itemTransition, delay: (delayBase + idx) * 0.12 }}
                  className={`
                    group relative overflow-hidden rounded-2xl
                    ring-1 ring-black/10 bg-white
                    shadow-[0_12px_26px_rgba(0,0,0,0.06)]
                    ${idx === 0 ? "aspect-[16/10]" : "aspect-[16/12]"}
                  `}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="
                      object-cover
                      transition-transform duration-500
                      group-hover:scale-[1.04]
                    "
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />
                  <figcaption className="absolute bottom-3 left-4 right-4 text-sm text-white/90" />
                </motion.figure>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
