import type { NextPage } from "next";
import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";


const Home: NextPage = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Testimonials />
      <FAQs/>
    </>
  );
};

Home.displayName = "Home";

export default Home;
