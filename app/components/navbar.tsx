"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

const navLinks = [
  { label: "PRODUCTS", href: "/#products" },
  { label: "FEATURES", href: "/#features" },
  { label: "ABOUT", href: "/#about" },
  { label: "CATALOGUE", href: "/catalogue" },
  { label: "CLIENTS", href: "/#clients" },
  { label: "CONTACT", href: "/#contact" },
 
];

export default function Navbar() {
  const pathname = usePathname();
  const activeHref = useMemo(() => pathname || "/", [pathname]);

  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => setOpen(false), [activeHref]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!open) return;
      const target = e.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onDown);
    window.addEventListener("touchstart", onDown);
    return () => {
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  return (
    <header className="w-full py-4 sm:py-6">
      <div className="mx-auto max-w-6xl px-3 sm:px-6">
        <nav
          ref={navRef}
          className="
            relative mx-auto
            w-full max-w-6xl
            rounded-2xl bg-white/95 backdrop-blur
            px-3 sm:px-5 py-3 sm:py-4
            shadow-[0_10px_26px_rgba(0,0,0,0.06)]
          "
          aria-label="Primary"
        >
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              ring-1 ring-black/10
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 rounded-2xl
              bg-gradient-to-r
              from-transparent via-transparent to-transparent
              shadow-[inset_0_-2px_0_0_rgba(59,130,246,0.55)]
            "
          />

          <div className="relative z-10 flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-3 min-w-0">
              <div className="relative h-10 w-14 sm:h-11 sm:w-16 overflow-hidden rounded-xl ring-1 ring-black/10 bg-white shrink-0">
                <Image
                  src="/logo.png"
                  alt="Butter logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Link>

            <ul className="hidden md:flex items-center gap-7 lg:gap-10">
              {navLinks.map((item) => {
                const isActive = activeHref === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                        relative text-[15px] lg:text-[16px] font-semibold
                        transition-colors duration-200
                        ${
                          isActive
                            ? "text-slate-900"
                            : "text-slate-700 hover:text-slate-900"
                        }
                      `}
                    >
                      <span
                        className={`
                          after:absolute after:left-0 after:-bottom-1.5
                          after:h-[2px] after:rounded-full
                          after:bg-gradient-to-r after:from-blue-600 after:to-cyan-500
                          after:transition-all after:duration-200
                          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
                        `}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/#contact"
                className="
                  hidden sm:inline-flex
                  items-center justify-center
                  rounded-xl px-5 sm:px-6 py-2.5 sm:py-3
                  text-[15px] sm:text-[16px] font-semibold text-white
                  bg-gradient-to-r from-blue-600 to-cyan-500
                  shadow-[0_12px_26px_rgba(59,130,246,0.20)]
                  ring-1 ring-black/5
                  transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(59,130,246,0.25)]
                  active:translate-y-0
                "
              >
                Get Started
              </Link>

              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="
                  md:hidden inline-flex items-center justify-center
                  rounded-xl px-3.5 py-3
                  text-slate-800
                  ring-1 ring-black/10
                  hover:bg-slate-50
                  transition
                "
              >
                <span className="text-lg leading-none">{open ? "✕" : "☰"}</span>
              </button>
            </div>
          </div>

          <div
            className={`
              md:hidden overflow-hidden
              transition-[max-height,opacity,transform] duration-200
              ${open ? "max-h-[420px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"}
            `}
          >
            <div className="pt-3">
              <ul className="grid gap-2">
                {navLinks.map((item) => {
                  const isActive = activeHref === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`
                          flex items-center justify-between
                          rounded-xl px-4 py-3
                          text-[16px] font-semibold
                          transition
                          ${isActive ? "bg-blue-50 text-slate-900" : "text-slate-800 hover:bg-slate-50"}
                        `}
                      >
                        {item.label}
                        <span className="text-slate-400">›</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-3">
                <Link
                  href="/contact"
                  className="
                    inline-flex w-full items-center justify-center
                    rounded-xl px-5 py-3
                    text-[16px] font-semibold text-white
                    bg-gradient-to-r from-blue-600 to-cyan-500
                    shadow-[0_12px_26px_rgba(59,130,246,0.20)]
                    ring-1 ring-black/5
                    transition-all duration-200
                    hover:-translate-y-0.5
                  "
                >
                  Get Started
                </Link>
              </div>

              <div className="h-2" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}