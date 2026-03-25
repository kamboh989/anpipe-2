import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-16 pb-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14  flex items-center justify-center">
      <img
        src="/logo.png"  // Replace with the actual path to your logo image
        alt="Logo"
        className="w-full h-full object-contain"  // Ensures the image fits within the container
      />
    </div>
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  <span className="text-black">A.N</span>{" "}
                  <span className="text-blue-600">INDUSTRIES</span>
                </h2>
                <p className="text-xs tracking-[0.25em] text-gray-500 uppercase">
                  Excellence Since 1991
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-7 max-w-sm">
              Leading the industry with precision-engineered M.S. and G.I.
              pipes. Our ISO-certified manufacturing process ensures world-class
              quality for every infrastructure project.
            </p>

            <div className="flex items-center gap-3 mt-6">
              <Link
                href="https://facebook.com"
                className="w-11 h-11 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://twitter.com"
                className="w-11 h-11 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-11 h-11 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                className="w-11 h-11 rounded-xl border border-gray-200 hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-2xl font-extrabold uppercase tracking-wide mb-2">
              Navigation
            </h3>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>

            <ul className="space-y-4 text-gray-700">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-blue-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-600 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-blue-600 transition">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/catalogue"
                  className="hover:text-blue-600 transition inline-flex items-center gap-1"
                >
                  Catalogue <ArrowUpRight size={15} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Inquiry */}
          <div>
            <h3 className="text-2xl font-extrabold uppercase tracking-wide mb-2">
              Inquiry
            </h3>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-6"></div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Email Protocol
                  </p>
                  <a
                    href="mailto:info@anpipe.com.pk"
                    className="font-semibold hover:text-blue-600 transition"
                  >
                    info@anpipe.com.pk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Call Center
                  </p>
                  <a
                    href="tel:+924237963775"
                    className="font-bold text-lg hover:text-blue-600 transition"
                  >
                    +92 42 37963775
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">
                    Logistics
                  </p>
                  <p className="text-gray-700 leading-6">
                    9-KM G.T. Road, Ferozewala, <br />
                    Lahore 54950, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bulletin */}
          <div>
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-b from-white to-blue-50 p-6 shadow-sm">
              <h3 className="text-2xl font-extrabold uppercase mb-4">
                Bulletin
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                Stay updated with our latest industrial piping solutions and
                corporate developments.
              </p>

              <input
                type="email"
                placeholder="Official Email"
                className="w-full h-12 px-4 rounded-xl border border-gray-200 outline-none focus:border-blue-500 mb-4"
              />

              <button className="w-full h-12 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition inline-flex items-center justify-center gap-2">
                JOIN US <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-14 pt-8">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold tracking-[0.18em] uppercase text-gray-700 bg-gray-50">
              Made in Pakistan
            </span>
            <span className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold tracking-[0.18em] uppercase text-gray-700 bg-gray-50">
              ISO 9001
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm">
            © 2026{" "}
            <span className="font-semibold text-black">
              An Pipe Industrial (Pvt) Ltd.
            </span>{" "}
            | All rights reserved.
          </div>

          {/* Bottom Links */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-blue-600 transition">
                Privacy
              </Link>
              <Link href="/terms-conditions" className="hover:text-blue-600 transition">
                Terms
              </Link>
              <Link href="/cookies-policy" className="hover:text-blue-600 transition">
                Cookies
              </Link>
            </div>

            {/* AI VERSE last me links ke sath */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>By</span>
              <a
                href="https://aiverse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold tracking-[0.25em] uppercase hover:bg-blue-700 transition"
              >
                AI VERSE
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}