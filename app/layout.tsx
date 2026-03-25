import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import  Footer  from "./components/Footer";
import { site } from "@/lib/site";



// Nunito font setup (GLOBAL)
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
 
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  icons: {
    icon: site.favicon.icon,
    shortcut: site.favicon.shortcut,
   
  },
  alternates: {
    canonical: "/",
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
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
