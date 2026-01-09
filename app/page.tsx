import React from 'react'
import  Hero  from "./components/hero";
import  Sales  from "./components/salesproblem";
import  Training  from "./components/TrainingInsideSec";
import  Program  from "./components/ProgramObject";
import  Delivery  from "./components/delivery";
import  Result  from "./components/result";
import  About  from "./components/about";
import  Feedback  from "./components/clientsFeedback";
import  Faq  from "./components/faq";

const page = () => {
  return (
    <div>
      <Hero />
      <Sales />
      <Training />
      <Program />
      <Delivery />
      <Result />
      <About />
      <Feedback />
      <Faq />
    </div>
  )
}

export default page
