"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");

    try {
      const form = e.currentTarget;
      const data = new FormData(form);

      // TODO: Replace with your real endpoint
      // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(data)) })
      await new Promise((r) => setTimeout(r, 700));

      form.reset();
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="py-16 sm:py-20 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          {/* LEFT: AEO text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2
              id="contact-form-title"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
            >
              Send a{" "}
              <span className="text-pink-600">Message</span>
            </h2>

            {/* AEO direct answer */}
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 max-w-xl">
              Use this form to contact Shannon Smith for keynote speaking,
              workshops, corporate training, media interviews, or partnership
              opportunities. Share your event details so we can respond with the
              right next steps.
            </p>

            <div className="mt-6 space-y-2 text-sm sm:text-base text-slate-600">
              <p>
                <span className="font-semibold text-slate-800">
                  Helpful to include:
                </span>{" "}
                event type, date, location/virtual, audience size, and goals.
              </p>
              <p>
                We typically respond within{" "}
                <span className="font-semibold text-slate-800">1–2 business days</span>.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="
              rounded-3xl bg-white
              ring-1 ring-black/10
              shadow-[0_18px_45px_rgba(0,0,0,0.08)]
              p-6 sm:p-8
              transition
              hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]
            "
          >
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="
                    mt-2 w-full rounded-xl
                    bg-white
                    px-4 py-3
                    text-slate-900
                    ring-1 ring-black/10
                    focus:ring-2 focus:ring-pink-500
                    outline-none
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="
                    mt-2 w-full rounded-xl
                    bg-white
                    px-4 py-3
                    text-slate-900
                    ring-1 ring-black/10
                    focus:ring-2 focus:ring-pink-500
                    outline-none
                  "
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 123 4567"
                  className="
                    mt-2 w-full rounded-xl
                    bg-white
                    px-4 py-3
                    text-slate-900
                    ring-1 ring-black/10
                    focus:ring-2 focus:ring-pink-500
                    outline-none
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your event: date, format, audience size, and goals..."
                  className="
                    mt-2 w-full rounded-xl
                    bg-white
                    px-4 py-3
                    text-slate-900
                    ring-1 ring-black/10
                    focus:ring-2 focus:ring-pink-500
                    outline-none
                    resize-y
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  w-full inline-flex items-center justify-center
                  rounded-xl px-6 py-3
                  text-base font-semibold text-white
                  bg-gradient-to-r from-fuchsia-600 to-pink-500
                  shadow-[0_12px_26px_rgba(236,72,153,0.18)]
                  ring-1 ring-black/5
                  transition
                  hover:-translate-y-0.5
                  disabled:opacity-60 disabled:hover:translate-y-0
                "
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent ✓"
                  : status === "error"
                  ? "Something went wrong"
                  : "Send Message"}
              </button>

              {/* small privacy note */}
              <p className="text-xs text-slate-600 text-center">
                We’ll only use your details to respond to your inquiry.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
