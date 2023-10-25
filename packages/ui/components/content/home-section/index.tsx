import { AspectRatio, Box, HStack, Img, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";

export default function HomeSection() {
  return (
    <HStack
      w={"100%"}
      h={"600px"}
      spacing={"100px"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
    >
      <iframe
        title="Class G Mansory"
        tabIndex={-1}
        webkit-playsinline=""
        style={{
          zIndex: -50,
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        src="https://www.youtube.com/embed/kegO-wYVrmU?autoplay=1&mute=1&vq=hd1080&controls=0&loop=1&rel=0"
        allowFullScreen
      />
      <VStack
        spacing="39px"
        alignItems={"left"}
        justifyContent={"left"}
        w="50%"
      >
        <Text
          color={COLORS.Third.value}
          fontSize={["4px", "7px", "14px"]}
          fontWeight={"500"}
          lineHeight={"17px"}
        >
          100% Trusted Car rentel platform in Dubaï
        </Text>
        <VStack spacing={"24px"} w="fit-content" alignItems={"left"}>
          <Text
            color={COLORS.Secondary.value}
            fontSize={["12px", "33px", "46px"]}
            fontWeight={"800"}
            lineHeight={"121.2%"}
            textTransform={"uppercase"}
          >
            Fast And Easy Way To Rent A Car
          </Text>
          <Text
            color={COLORS.Third.value}
            fontSize={["5px", "10px", "16px"]}
            fontWeight={"500"}
            lineHeight={"26px"}
            letterSpacing={"-0.32px"}
            opacity="0.45"
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
          height={"24px"}
          justifyContent={"center"}
        >
          <Text
            color={COLORS.Secondary.value}
            fontSize={["5px", "10px", "16px"]}
            fontWeight={600}
            lineHeight={"24px"}
            letterSpacing={"-0.32px"}
          >
            See all cars
          </Text>
        </Button>
      </VStack>
      {/* <Stack w={"full"} alignItems={"flex-end"}>
        <Img
          w={["150px", "300px", "700px"]}
          h={["150px", "300px", "700px"]}
          bgColor={"transparent"}
          src={`/images/class_g/Class_G_Orange_outside_front.jpg`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          borderRadius="63px 0px 0px 0px"
        />
      </Stack> */}
    </HStack>
  );
}
