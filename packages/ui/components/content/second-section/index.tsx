import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import StepCard from "../step-card";
import Icon from "../../../contents/icon";

export default function SecondSection() {
  return (
    <VStack spacing={"48px"}>
      <VStack justifyContent={"center"} spacing={"18px"} w={"25%"}>
        <Text
          color={COLORS.Secondary.value}
          fontSize={"48px"}
          lineHeight={"150%"}
          letterSpacing={"-0.96px"}
        >
          How it work
        </Text>
        <Text
          textAlign={"center"}
          color={COLORS.Third.value}
          fontSize={"18px"}
          lineHeight={"150%"}
          letterSpacing={"-0.96px"}
          fontWeight={400}
        >
          A high-performing web-based car rental system for any rent-a-car
          company and website
        </Text>
      </VStack>

      <HStack w="100%" spacing="0px" justifyContent={"center"}>
        <StepCard
          name="localisation"
          title="Choose Location"
          content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
        />
        <Stack>
          <Icon name="stepLine" />
        </Stack>
        <StepCard
          name="calendar"
          title="Pick-up Date"
          content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
        />
        <Stack>
          <Icon name="stepLine" />
        </Stack>
        <StepCard
          name="car"
          title="Book your car"
          content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
        />
      </HStack>
    </VStack>
  );
}
