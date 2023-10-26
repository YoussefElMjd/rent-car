import { Box, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Icon from "../../../contents/icon";
import IStepCardProps from "./props";
import COLORS from "../../../constant/colors";
import Text from "../text";
import Reveal from "../reveal";

export default function StepCard(props: IStepCardProps) {
  return (
    <VStack
      w="auto"
      spacing={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Reveal>
        <Stack
          bgColor={COLORS.Fourth.value}
          borderRadius={"30px"}
          w="106px"
          h="106px"
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Icon name={props.name} stroke={COLORS.Third.value} />
        </Stack>
      </Reveal>
      <VStack spacing={"18px"} justifyContent={"center"} alignItems={"center"}>
        <Reveal>
          <Text
            textAlign={"center"}
            color={COLORS.Secondary.value}
            fontSize={"24px"}
            fontWeight={600}
            letterSpacing={"-0.48px"}
            lineHeight={"150%"}
          >
            {props.title}
          </Text>
        </Reveal>
        <Reveal>
          <Text
            textAlign={"center"}
            color={COLORS.Third.value}
            fontSize={"14px"}
            fontWeight={400}
            letterSpacing={"-0.28px"}
            lineHeight={"175%"}
          >
            {props.content}
          </Text>
        </Reveal>
      </VStack>
    </VStack>
  );
}
