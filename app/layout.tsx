import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import  Footer  from "./components/Footer";
import { site } from "@/lib/site";
import StructuredData from "@/app/components/StructuredData";


// Nunito font setup (GLOBAL)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: site.locale,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Force light theme */}
        <meta name="color-scheme" content="light" />
      </head>

      <body
        className={`${nunito.className} bg-white text-slate-900 min-h-screen`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
