import { Box, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import CustomIcon from "../custom-icon";
import Icon from "../../../contents/icon";
import IStepCardProps from "./props";
import COLORS from "../../../constant/colors";
import Text from "../text";

export default function StepCard(props: IStepCardProps) {
  return (
    <VStack
      w="fit-content"
      spacing={"30px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
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
      <VStack spacing={"18px"} justifyContent={"center"} alignItems={"center"}>
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
      </VStack>
    </VStack>
  );
}
