import { Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import ITitleContentProps from "./props";

export default function TitleContent(props: ITitleContentProps) {
  return (
    <VStack justifyContent={"center"} spacing={"1.125rem"} w={"50%"}>
      <Text
        color={COLORS.Secondary.value}
        fontSize={"3rem"}
        lineHeight={"150%"}
        letterSpacing={"-0.06rem"}
        textAlign={"center"}
      >
        {props.title}
      </Text>
      <Stack w="50%">
        <Text
          textAlign={"center"}
          color={COLORS.Third.value}
          fontSize={"1.125rem"}
          lineHeight={"150%"}
          letterSpacing={"-0.06rem"}
          fontWeight={400}
        >
          {props.content}
        </Text>
      </Stack>
    </VStack>
  );
}
