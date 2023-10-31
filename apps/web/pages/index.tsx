import React from "react";
import Header from "./../../../packages/ui/components/content/header/index";
import HomeSection from "./../../../packages/ui/components/content/home-section/index";
import SectionSplit from "./../../../packages/ui/components/content/section-split/index";
import SecondSection from "./../../../packages/ui/components/content/second-section/index";
import { VStack } from "@chakra-ui/react";
import ThirdSection from "./../../../packages/ui/components/content/third-section/index";
import AudioPlayer from "./../../../packages/ui/components/content/audio-player/index";
import ContactSection from "./../../../packages/ui/components/content/contact-section/index";
import ReviewSection from "./../../../packages/ui/components/content/review-section/index";
import Footer from "./../../../packages/ui/components/content/footer/index";
import COLORS from "../../../packages/ui/constant/colors";
export default function Home() {
  return (
    <VStack>
      <AudioPlayer />
      <Header />
      <HomeSection />
      <SectionSplit />
      <SecondSection />
      <SectionSplit />
      <ThirdSection />
      <SectionSplit />
      <ContactSection />
      <SectionSplit />
      <ReviewSection />
      <SectionSplit />
      <Footer />
    </VStack>
  );
}
