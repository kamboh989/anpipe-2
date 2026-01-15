import Image from "next/image";

type Img = {
  src: string;
  alt: string;
};

const images: Img[] = [
  {
    src: "/speak/s1.png", 
    alt: "Speaking event photo 1",
  },
  {
    src: "/speak/s2.jpg", 
    alt: "Speaking event photo 2",
  },
];

export default function TwoImageShowcase() {
  return (
    <section className="w-full bg-white py-15 mt-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-6 md:grid-cols-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-3xl border border-gray-200 bg-white
                shadow-sm transition
                hover:shadow-lg
              "
            >
              {/* fixed ratio like your reference */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-300 ease-out
                    group-hover:scale-[1.06]
                  "
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />
              </div>

              {/* subtle overlay on hover (optional but nice) */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
