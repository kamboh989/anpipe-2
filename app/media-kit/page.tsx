import React from 'react'
// import Hero from "./hero";
import Kits from "./kits";
import  Faq  from "./faq";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media Kit",
  description:
    "Download and preview media kit assets for Shannon Smith—bio versions, headshots, speaking topics, AV requirements, and booking details.",
     keywords: [
  "speaker media kit",
  "neuroscience speaker media kit",
  "Shannon Smith media kit",
  "speaker bio and headshots",
  "keynote speaker assets",
  "event planner speaker kit",
  "speaker one sheet",
  "press kit neuroscience speaker",
  "corporate speaker media kit"
],

  alternates: { canonical: "/media-kit" },
  openGraph: {
    title: `Media Kit | ${site.name}`,
    description:
      "Download and preview media kit assets for Shannon Smith—bio versions, headshots, speaking topics, AV requirements, and booking details.",
    url: `${site.url}/media-kit`,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Media Kit | ${site.name}`,
    description:
      "Download and preview media kit assets for Shannon Smith—bio versions, headshots, speaking topics, AV requirements, and booking details.",
    images: [site.ogImage],
  },
}


const page = () => {
  return (
    <div>
        {/* <Hero />    */}
        <Kits />
        <Faq />
    </div>
  )
}

export default page
