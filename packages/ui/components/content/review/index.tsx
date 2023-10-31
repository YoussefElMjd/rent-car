import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import IReviewProps from "./props";
import COLORS from "../../../constant/colors";

export default function Review(props: IReviewProps) {
  return (
    <VStack
      {...props}
      w="25rem"
      h="14.375rem"
      minW="25rem"
      minH="14.375rem"
      borderRadius=".625rem"
      bgColor={COLORS.Third.value}
      padding="2.0625rem 2.25rem"
      spacing={"1.25rem"}
    >
      <HStack w="full" alignItems={"left"}>
        <VStack spacing={0} w="full" alignItems={"left"}>
          <Text
            color={COLORS.Secondary.value}
            fontSize={"1.125rem"}
            fontWeight={"500"}
            lineHeight={"1.875rem"}
          >
            {props.name}
          </Text>
          <Text
            color={COLORS.Fourth.value}
            fontSize={".875rem"}
            fontWeight={"400"}
            lineHeight={".625rem"}
          >
            {props.location}
          </Text>
        </VStack>
        <Text
          color={COLORS.Secondary.value}
          fontSize={"1rem"}
          fontWeight={"400"}
          lineHeight={"1.875rem"}
        >
          {props.note}
        </Text>
      </HStack>
      <Text
        color={COLORS.Secondary.value}
        fontSize={"1rem"}
        fontWeight={"400"}
        lineHeight={"1.875rem"}
      >
        “{props.review}”.
      </Text>
    </VStack>
  );
}
