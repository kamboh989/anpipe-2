import Image from "next/image";
import Link from "next/link";

const inventoryItems = [
  {
    category: "Industrial",
    title: "G.I. Pipes",
    desc: "Our high-precision G.I. pipes offer superior corrosion resistance and structural longevity for demanding industrial use.",
    image: "/iron-pipe.png",
  },
  {
    category: "Structural",
    title: "M.S. Pipes",
    desc: "M.S. pipes engineered for maximum load-bearing capacity, ensuring safety and stability for large infrastructure projects.",
    image: "/ms-pipe.png",
  },
  {
    category: "Structural",
    title: "Scaffolding Tube",
    desc: "Premium scaffolding tubes designed for reliable support, built to perform under high-pressure construction conditions.",
    image: "/scaffolding-pipe.png",
  },
];

export default function RealResultsSection() {
  return (
    <section
      aria-labelledby="real-results-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* white bg + soft blue center glow */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/70 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#3b82f6_1px,transparent_1px)] [background-size:120px_100%]" />
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_bottom,#60a5fa_1px,transparent_1px)] [background-size:100%_120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-600">
              Capabilities
            </span>
          </div>

          <h2
            id="real-results-title"
            className="text-4xl font-extrabold uppercase leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Precision
            <br />
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              Inventory
            </span>
          </h2>

          top pills
          <div className="mt-8 flex flex-wrap gap-3">
            {/* <button className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)]">
              All
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Industrial
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Structural
            </button>
            <button className="rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Commercial
            </button> */}
          </div>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {inventoryItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.12)]"
            >
              <div className="relative h-[250px] w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">
                  {item.category}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold uppercase leading-none tracking-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href="#products"
                    className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600 transition hover:text-blue-800"
                  >
                    Detail →
                  </Link>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-100 bg-blue-50 text-blue-600">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}