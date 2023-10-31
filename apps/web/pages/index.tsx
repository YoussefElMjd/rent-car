import React, { useRef } from "react";
import Header from "./../../../packages/ui/components/content/header/index";
import HomeSection from "./../../../packages/ui/components/content/home-section/index";
import SectionSplit from "./../../../packages/ui/components/content/section-split/index";
import { VStack } from "@chakra-ui/react";
import AudioPlayer from "./../../../packages/ui/components/content/audio-player/index";
import ContactSection from "./../../../packages/ui/components/content/contact-section/index";
import ReviewSection from "./../../../packages/ui/components/content/review-section/index";
import Footer from "./../../../packages/ui/components/content/footer/index";
import StepSection from "../../../packages/ui/components/content/step-section/index";
import CatalogueSection from "../../../packages/ui/components/content/catalogue-section/index";

export default function Home() {
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const stepSectionRef = useRef<HTMLDivElement>(null);
  const catalogueSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const reviewSectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    switch (section) {
      case "home":
        console.log(homeSectionRef);
        if (homeSectionRef.current != null) {
          return homeSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case "step":
        if (stepSectionRef.current != null) {
          console.log("step");
          return stepSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case "catalogue":
        if (catalogueSectionRef.current != null) {
          console.log("catalogue");
          return catalogueSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case "contact":
        if (contactSectionRef.current != null) {
          return contactSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
      case "review":
        if (reviewSectionRef.current != null) {
          return reviewSectionRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        break;
    }
  };
  return (
    <VStack>
      <AudioPlayer />
      <Header onLinkClick={scrollToSection} />
      <HomeSection ref={homeSectionRef} />
      <SectionSplit ref={stepSectionRef} />
      <StepSection />
      <SectionSplit ref={catalogueSectionRef} />
      <CatalogueSection />
      <SectionSplit ref={contactSectionRef} />
      <ContactSection />
      <SectionSplit ref={reviewSectionRef} />
      <ReviewSection />
      <SectionSplit />
      <Footer />
    </VStack>
  );
}
