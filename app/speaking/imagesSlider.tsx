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

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function SpeakingGallerySection() {
  // filter those that exist conceptually (you can remove if you always have 5)
  const list = images.filter(Boolean).slice(0, 5);

  return (
    <section
      aria-labelledby="gallery-title"
      className="
        py-14 sm:py-18
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
      "
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading (AEO-friendly) */}
      

        {/* Gallery */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-5 lg:grid-cols-2"
        >
          {/* LEFT COLUMN (2 or 3 cards) */}
          <div className="grid gap-5">
            {list.slice(0, 3).map((img, idx) => (
              <motion.figure
                key={img.src}
                variants={item}
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
                {/* subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-60" />
                <figcaption className="absolute bottom-3 left-4 right-4 text-sm text-white/90">
                  
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* RIGHT COLUMN (2 cards, one slightly offset for beauty) */}
          <div className="grid gap-5 lg:pt-10">
            {list.slice(3, 5).map((img, idx) => (
              <motion.figure
                key={img.src}
                variants={item}
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
                <figcaption className="absolute bottom-3 left-4 right-4 text-sm text-white/90">
                  
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}
