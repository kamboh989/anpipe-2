
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
