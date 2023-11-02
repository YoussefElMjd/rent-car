import { HStack, Stack, VStack } from "@chakra-ui/react";
import IIConTextProps from "./porps";
import React from "react";
import Icon from "../../../contents/icon";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Reveal from "../reveal";

export default function IconText(props: IIConTextProps) {
  return (
    <HStack
      spacing={"1.75rem"}
      w={{ base: "22.875rem", lg: "35.375rem", xl: "35.375rem" }}
      alignItems={"left"}
    >
      <Stack
        bgColor={COLORS.Secondary.value}
        borderRadius={".625rem"}
        minW="3.25rem"
        minH="3.25rem"
        w={"3.25rem"}
        h="3.25rem"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Icon name={props.iconName} />
      </Stack>
      <VStack alignItems={"left"} spacing={"0"}>
        <Text
          color={COLORS.Secondary.value}
          fontSize={"1.375rem"}
          fontWeight={"600"}
          textAlign={"left"}
          lineHeight={"2.0625rem"}
          letterSpacing={"-0.0275rem"}
        >
          {props.title}
        </Text>
        <Text
          color={COLORS.Third.value}
          fontSize={"1rem"}
          fontWeight={"400"}
          textAlign={"left"}
          lineHeight={"1.75rem"}
          letterSpacing={"-0.02rem"}
        >
          {props.content}
        </Text>
      </VStack>
    </HStack>
  );
}
