import React from 'react'
import Hero from "./hero";
import Form from "./form";
import Faq from "./faq";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Shannon Smith for speaking inquiries, corporate training, media requests, and partnerships. Most replies within 24–48 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${site.name}`,
    description:
      "Contact Shannon Smith for speaking inquiries, corporate training, media requests, and partnerships. Most replies within 24–48 hours.",
    url: `${site.url}/contact`,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${site.name}`,
    description:
      "Contact Shannon Smith for speaking inquiries, corporate training, media requests, and partnerships. Most replies within 24–48 hours.",
    images: [site.ogImage],
  },
};


const page = () => {
  return (
    <div>
        <Hero />
        <Form />
        <Faq />
    </div>
  )
}

export default page
