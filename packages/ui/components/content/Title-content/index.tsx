import { Stack, VStack } from "@chakra-ui/react";
import ITitleContentProps from "./props";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";

export default function TitleContent(props: ITitleContentProps) {
  return (
    <VStack justifyContent={"center"} spacing={"18px"} w={"50%"}>
      <Text
        color={COLORS.Secondary.value}
        fontSize={"48px"}
        lineHeight={"150%"}
        letterSpacing={"-0.96px"}
        textAlign={"center"}
      >
        {props.title}
      </Text>
      <Stack w="50%">
        <Text
          textAlign={"center"}
          color={COLORS.Third.value}
          fontSize={"18px"}
          lineHeight={"150%"}
          letterSpacing={"-0.96px"}
          fontWeight={400}
        >
          {props.content}
        </Text>
      </Stack>
    </VStack>
  );
}
