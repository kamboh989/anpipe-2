
import React from 'react'
import  Hero  from "./hero";
import  Content  from "./content";
import  Image  from "./contentImage";
import { HeroScrollDemo } from './bio-image';
import  Bio  from "./bio";
import  Cards  from "./cards";
import  Slider  from "./imagesSlider";
import  Topic  from "./topic";
import  Faq  from "./faq";
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Neuroscience-backed keynotes and workshops for conferences and corporate teams.",
  alternates: { canonical: "/speaking" },
  openGraph: {
    title: `Speaking | ${site.name}`,
    description:
      "Neuroscience-backed keynotes and workshops for conferences and corporate teams.",
    url: `${site.url}/speaking`,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.title }],
  },
};


const page = () => {
  return (
    <div>
      <Hero />
      <Content />
      <Image />
    <HeroScrollDemo />
    <Bio />
    <Cards />
    <Slider />
    <Topic />
    <Faq />
    </div>
  )
}

export default page
