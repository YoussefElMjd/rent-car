import { HStack, VStack, forwardRef } from "@chakra-ui/react";
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
      h={{ base: "200px", lg: "600px", xl: "600px" }}
      spacing={"6.25rem"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <VideoBackground
        position={"absolute"}
        src="https://www.youtube.com/embed/yAo7eSoq2_8"
        idvideo="yAo7eSoq2_8"
        h={{ base: "200px", lg: "600px", xl: "600px" }}
      />
      <VStack
        spacing={{ base: "5px", lg: "2.4375rem", xl: "2.4375rem" }}
        alignItems={"left"}
        justifyContent={"left"}
        w="50%"
        zIndex={5}
      >
        <Text
          color={COLORS.Third.value}
          fontSize={{ base: "8px", lg: ".875rem", xl: "1.5rem" }}
          fontWeight={"500"}
          lineHeight={"17px"}
        >
          100% Trusted Car rentel platform in Dubaï
        </Text>
        <VStack
          spacing={{ base: "10px", lg: "24px", xl: "24px" }}
          w="fit-content"
          alignItems={"left"}
        >
          <Text
            color={COLORS.Secondary.value}
            fontSize={{ base: "16px", lg: "2.0625rem", xl: "3.5rem" }}
            fontWeight={"900"}
            lineHeight={{ base: "18px", lg: "121.2%", xl: "121.2%" }}
            textTransform={"uppercase"}
          >
            Fast And Easy Way To Rent A Car
          </Text>
          <Text
            color={COLORS.Third.value}
            fontSize={{ base: "7px", lg: ".625rem", xl: "1.5rem" }}
            fontWeight={"500"}
            lineHeight={{ base: "10px", lg: "26px", xl: "26px" }}
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
            fontSize={{ base: "8px", lg: ".625rem", xl: "1rem" }}
            fontWeight={600}
            lineHeight={"1.5rem"}
            letterSpacing={"-0.02rem"}
          >
            See all cars
          </Text>
        </Button>
      </VStack>
      {/* <Stack w={"full"} alignItems={"flex-end"}>
        <Img
          w={["9.375rem", "18.75rem", "43.75rem"]}
          h={["9.375rem", "18.75rem", "43.75rem"]}
          bgColor={"transparent"}
          src={`/images/class_g/Class_G_Orange_outside_front.jpg`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="3.9375rem 0rem 0rem 0rem"
        />
      </Stack> */}
    </HStack>
  );
});
export default HomeSection;
