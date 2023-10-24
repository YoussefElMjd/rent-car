import React from "react";
import Header from "./../../../packages/ui/components/content/header/index";
import HomeSection from "./../../../packages/ui/components/content/home-section/index";
import SectionSplit from "./../../../packages/ui/components/content/section-split/index";
import SecondSection from "./../../../packages/ui/components/content/second-section/index";
import { VStack } from "@chakra-ui/react";
export default function Home() {
  return (
    <VStack padding="28px 100px 28px 100px">
      <Header />
      <HomeSection />
      <SectionSplit />
      <SecondSection />
      <SectionSplit />
    </VStack>
  );
}
