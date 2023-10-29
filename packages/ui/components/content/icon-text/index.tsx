import { HStack, Stack, VStack } from "@chakra-ui/react";
import IIConTextProps from "./porps";
import React from "react";
import Icon from "../../../contents/icon";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Reveal from "../reveal";

export default function IconText(props: IIConTextProps) {
  return (
    <HStack spacing={"28px"} w={"500px"} alignItems={"left"}>
      <Stack
        bgColor={COLORS.Secondary.value}
        borderRadius={"10px"}
        minW="52px"
        minH="52px"
        w={"52px"}
        h="52px"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Icon name={props.iconName} />
      </Stack>
      <VStack alignItems={"left"} spacing={"0"}>
        <Text
          color={COLORS.Secondary.value}
          fontSize={"22px"}
          fontWeight={"600"}
          textAlign={"left"}
          lineHeight={"33px"}
          letterSpacing={"-0.44px"}
        >
          {props.title}
        </Text>
        <Text
          color={COLORS.Third.value}
          fontSize={"16px"}
          fontWeight={"400"}
          textAlign={"left"}
          lineHeight={"28px"}
          letterSpacing={"-0.32px"}
        >
          {props.content}
        </Text>
      </VStack>
    </HStack>
  );
}
