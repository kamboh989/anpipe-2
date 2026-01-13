import Link from "next/link";
import { Linkedin } from "lucide-react";
import Image from "next/image";


const links = [
  { label: "Home", href: "/" },
  { label: "Speaking", href: "/speaking" },
  { label: "media Kit", href: "/media-kit" },
  { label: "Post", href: "/post" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="
        mt-16
        bg-[linear-gradient(120deg,#ffffff_0%,#fff1f7_55%,#ffffff_100%)]
        border-t border-black/10
      "
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
           
            <div className="flex items-center gap-3">
  {/* Real logo (same as navbar) */}
  <div
    className="
      relative h-10 w-14
       overflow-hidden

      bg-white
    "
  >
    <Image
      src="/logo.jpeg"
      alt="NeuroSales logo"
      fill
      className="object-contain"
      sizes="56px"
    />
  </div>

  <div className="leading-tight">
    <p className="text-lg font-extrabold text-slate-900">
      brainhacksbyshannon
    </p>
    <p className="text-sm text-slate-600">
      Ethical Persuasion Training
    </p>
  </div>
</div>


            {/* AEO-friendly short description */}
            <p className="mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-slate-700">
              Neuroscience-based sales training designed to help teams build trust,
              reduce resistance, and close with clarity—without pressure.
            </p>

            {/* LinkedIn only */}
            <div className="mt-5">
              <a
                href="https://www.linkedin.com/in/shannonsmithjdms/"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-xl px-4 py-2
                  bg-white/70
                  ring-1 ring-black/10
                  text-slate-800
                  hover:bg-white transition
                "
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-pink-600" />
                <span className="text-sm font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-center">
            <h3 className="text-sm font-extrabold tracking-wide text-slate-900">
              QUICK LINKS
            </h3>

            <ul className="mt-4 space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="
                      text-sm sm:text-base text-slate-700
                      hover:text-slate-900 transition
                      inline-flex items-center gap-2
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-600/70" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Small info / CTA text (no form) */}
          <div className="md:justify-self-end">
            <h3 className="text-sm font-extrabold tracking-wide text-slate-900">
              ABOUT
            </h3>

            <p className="mt-4 max-w-sm text-sm sm:text-base leading-relaxed text-slate-700">
              Built for teams who want consistent results with a simple,
              human-first process. Clear frameworks. Practical practice. Real outcomes.
            </p>

            <div className="mt-5">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-xl px-5 py-2.5
                  text-sm sm:text-base font-semibold text-white
                  bg-gradient-to-r from-fuchsia-600 to-pink-500
                  shadow-[0_12px_26px_rgba(236,72,153,0.18)]
                  ring-1 ring-black/5
                  transition hover:-translate-y-0.5
                "
              >
                Apply for the Sprint
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs sm:text-sm text-slate-600">
            © {new Date().getFullYear()} brainhacksbyshannon. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-slate-600">
            Privacy-first • Ethical selling • Human communication
          </p>
        </div>
      </div>
    </footer>
  );
}
