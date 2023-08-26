import type { NextPage } from "next";
import ScrollUp from "@/components/Common/ScrollUp";

import Features from "@/components/Features";
import Hero from "@/components/Hero";

import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import ModalVideo from '@/components/modal-video'
import VideoThumb from '/public/images/hero-image.png'

const Home: NextPage = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <ModalVideo
        thumb={VideoThumb}
        thumbWidth={768}
        thumbHeight={432}
        thumbAlt="Modal video thumbnail"
        video="/images/videos/video.mp4"
        videoWidth={1920}
        videoHeight={1080} />
      <Features />
      <Testimonials />
      <FAQs/>
    </>
  );
};

Home.displayName = "Home";

export default Home;
