import { Box, HStack, Img, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";

export default function HomeSection() {
  return (
    <HStack spacing={"100px"} padding="28px 0px 28px 66px">
      <VStack
        spacing="39px"
        alignItems={"left"}
        justifyContent={"left"}
        w="40%"
      >
        <Text
          color={COLORS.Third.value}
          fontSize={"14px"}
          fontWeight={"500"}
          lineHeight={"17px"}
        >
          100% Trusted Car rentel platform in Dubaï
        </Text>
        <VStack spacing={"24px"} w="fit-content" alignItems={"left"}>
          <Text
            color={COLORS.Secondary.value}
            fontSize={"46px"}
            fontWeight={"800"}
            lineHeight={"121.2%"}
            textTransform={"uppercase"}
          >
            Fast And Easy Way To Rent A Car
          </Text>
          <Text
            color={COLORS.Third.value}
            fontSize={"16px"}
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
            fontSize={"16px"}
            fontWeight={600}
            lineHeight={"24px"}
            letterSpacing={"-0.32px"}
          >
            See all cars
          </Text>
        </Button>
      </VStack>
      <Box
        w={"60%"}
        h={"900px"}
        backgroundImage={`url('/images/Class_G_Orange_outside_front.jpg')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        borderRadius="63px 0px 0px 0px"
      />
    </HStack>
  );
}
