import React from "react";
import Header from "./../../../packages/ui/components/content/header/index";
import HomeSection from "./../../../packages/ui/components/content/home-section/index";
import SectionSplit from "./../../../packages/ui/components/content/section-split/index";
import SecondSection from "./../../../packages/ui/components/content/second-section/index";
import { VStack } from "@chakra-ui/react";
import ThirdSection from "./../../../packages/ui/components/content/third-section/index";
export default function Home() {
  return (
    <VStack padding="28px 150px 28px 150px">
      <Header />
      <HomeSection />
      <SectionSplit />
      <SecondSection />
      <SectionSplit />
      <ThirdSection />
    </VStack>
  );
}
