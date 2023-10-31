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
      spacing={"1.875rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Reveal>
        <Stack
          bgColor={COLORS.Fourth.value}
          borderRadius={"1.875rem"}
          w="6.625rem"
          h="6.625rem"
          justifyContent={"center"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Icon name={props.name} stroke={COLORS.Third.value} />
        </Stack>
      </Reveal>
      <VStack
        spacing={"1.125rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Reveal>
          <Text
            textAlign={"center"}
            color={COLORS.Secondary.value}
            fontSize={"1.5rem"}
            fontWeight={600}
            letterSpacing={"-0.03rem"}
            lineHeight={"150%"}
          >
            {props.title}
          </Text>
        </Reveal>
        <Reveal>
          <Text
            textAlign={"center"}
            color={COLORS.Third.value}
            fontSize={".875rem"}
            fontWeight={400}
            letterSpacing={"-0.0175rem"}
            lineHeight={"175%"}
          >
            {props.content}
          </Text>
        </Reveal>
      </VStack>
    </VStack>
  );
}
