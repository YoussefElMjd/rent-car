import { Box, HStack, VStack } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import TitleContent from "../Title-content";
import Review from "../review";
import Button from "../../inputs/button";
import COLORS from "../../../constant/colors";
import Icon from "../../../contents/icon";

export default function ReviewSection() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollPourcentage, setScrollPourcentage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 700;
      const maxScrollable = container.scrollWidth - container.clientWidth;
      if (direction === "left" && scrollX > 0) {
        if (container) {
          container.scrollTo({
            left: scrollX - scrollAmount,
            behavior: "smooth",
          });
        }
        setScrollX(scrollX - scrollAmount);
        setScrollPourcentage(((scrollX - scrollAmount) / maxScrollable) * 100);
      } else if (direction === "right" && scrollX < maxScrollable) {
        if (container) {
          container.scrollTo({
            left: scrollX + scrollAmount,
            behavior: "smooth",
          });
          setScrollX(scrollX + scrollAmount);
          setScrollPourcentage(
            ((scrollX + scrollAmount) / maxScrollable) * 100
          );
        }
      }
    }
  };

  const handleOnScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollX(e.currentTarget.scrollLeft);
  };

  return (
    <VStack w="full" spacing="50px">
      <TitleContent
        title="Trusted by Thousands of 
Happy Customer"
        content="A high-performing web-based car rental system for any rent-a-car company and website
"
      />
      <HStack
        ref={containerRef}
        spacing={"50px"}
        overflowX={"scroll"}
        w="80%"
        overscrollBehavior={"contain"}
        onScroll={handleOnScroll}
        sx={{
          "&::-webkit-scrollbar": {
            bgColor: "rgba(0,0,0,0.5)",
            width: "10px",
            height: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            bgColor: COLORS.Secondary.value,
            borderRadius: "10px",
            width: "8px",
            height: "6px",
          },
        }}
      >
        <Button
          position={"absolute"}
          left={20}
          paddingInlineStart={"0"}
          bgColor={"transparent"}
          w="fit-content"
          onClick={() => handleScroll("left")}
          zIndex={1}
        >
          <Icon name="previousArrow" />
        </Button>
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />{" "}
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />{" "}
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />{" "}
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />{" "}
        <Review
          name="KobaLaD"
          location="France"
          note="4.5"
          review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vestibulum arcu, ultrices malesuada enim semper sit amet. "
        />
        <Button
          position={"absolute"}
          right={20}
          bgColor={"transparent"}
          paddingInlineStart={"0"}
          w="fit-content"
          onClick={() => handleScroll("right")}
          zIndex={1}
        >
          <Icon name="nextArrow" />
        </Button>
      </HStack>
      <HStack w="80%">
        <Box
          width={"45px"}
          height="15px"
          bgColor={COLORS.Secondary.value}
          borderRadius={"10px"}
        />
        <Box
          width={"15px"}
          height="15px"
          bgColor={
            scrollPourcentage > 25 ? COLORS.Secondary.value : COLORS.Third.value
          }
          borderRadius={"100%"}
        />
        <Box
          width={"15px"}
          height="15px"
          bgColor={
            scrollPourcentage > 50 ? COLORS.Secondary.value : COLORS.Third.value
          }
          borderRadius={"100%"}
        />
        <Box
          width={"15px"}
          height="15px"
          bgColor={
            scrollPourcentage > 75 ? COLORS.Secondary.value : COLORS.Third.value
          }
          borderRadius={"100%"}
        />
      </HStack>
    </VStack>
  );
}
