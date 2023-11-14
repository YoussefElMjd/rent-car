import { AspectRatio, Box, HStack, VStack, forwardRef } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";
import VideoBackground from "../video-background";
import IHomeProps from "./props";

const HomeSection = forwardRef((props: IHomeProps, ref) => {
  return (
    <HStack
      ref={ref}
      w={"100%"}
      h={{ base: "12.5rem", lg: "37.5rem", xl: "37.5rem" }}
      spacing={"6.25rem"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      bgColor={"rgba(0,0,0,0.5)"}
    >
      <VideoBackground
        position={"absolute"}
        src="videos/videoAudiRs7.mp4"
        h={{ base: "12.5rem", lg: "37.5rem", xl: "37.5rem" }}
      />

      <VStack
        spacing={{ base: ".3125rem", lg: "2.4375rem", xl: "2.4375rem" }}
        alignItems={"left"}
        justifyContent={"left"}
        w="50%"
        zIndex={5}
      >
        <Text
          color={COLORS.Third.value}
          fontSize={{ base: ".5rem", lg: ".875rem", xl: "1.5rem" }}
          fontWeight={"500"}
          lineHeight={"1.0625rem"}
        >
          100% Trusted Car rentel platform in Dubaï
        </Text>
        <VStack
          spacing={{ base: ".625rem", lg: "1.5rem", xl: "1.5rem" }}
          w="fit-content"
          alignItems={"left"}
        >
          <Text
            color={COLORS.Secondary.value}
            fontSize={{ base: "1rem", lg: "2.0625rem", xl: "3.5rem" }}
            fontWeight={"900"}
            lineHeight={{ base: "1.125rem", lg: "121.2%", xl: "121.2%" }}
            textTransform={"uppercase"}
          >
            Fast And Easy Way To Rent A Car
          </Text>
          <Text
            color={COLORS.Third.value}
            fontSize={{ base: ".4375rem", lg: ".625rem", xl: "1.5rem" }}
            fontWeight={"500"}
            lineHeight={{ base: ".625rem", lg: "1.625rem", xl: "1.625rem" }}
            letterSpacing={"-0.02rem"}
            opacity="0.80"
          >
            Our Car Rental online booking system designed to meet the specific
            needs of car rental business owners. This easy-to-use car rental
            software will let you manage.
          </Text>
        </VStack>

        <Button
          padding={0}
          bgColor="transparent"
          width={"fit-content"}
          height={"1.5rem"}
          justifyContent={"center"}
        >
          <Text
            color={COLORS.Secondary.value}
            fontSize={{ base: ".5rem", lg: ".625rem", xl: "1rem" }}
            fontWeight={600}
            lineHeight={"1.5rem"}
            letterSpacing={"-0.02rem"}
          >
            See all cars
          </Text>
        </Button>
      </VStack>
    </HStack>
  );
});
export default HomeSection;
