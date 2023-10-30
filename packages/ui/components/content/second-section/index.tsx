import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import StepCard from "../step-card";
import Icon from "../../../contents/icon";
import TitleContent from "../Title-content";

export default function SecondSection() {
  return (
    <VStack spacing={"48px"}>
      <TitleContent
        title="How it work"
        content="A high-performing web-based car rental system for any rent-a-car
          company and website"
      />
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
