import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import IReviewProps from "./props";
import COLORS from "../../../constant/colors";

export default function Review(props: IReviewProps) {
  return (
    <VStack
      {...props}
      w="400px"
      h="230px"
      minW="400px"
      minH="230px"
      borderRadius="10px"
      bgColor={COLORS.Third.value}
      padding="33px 36px"
      spacing={"20px"}
    >
      <HStack w="full" alignItems={"left"}>
        <VStack spacing={0} w="full" alignItems={"left"}>
          <Text
            color={COLORS.Secondary.value}
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"30px"}
          >
            {props.name}
          </Text>
          <Text
            color={COLORS.Fourth.value}
            fontSize={"14px"}
            fontWeight={"400"}
            lineHeight={"10px"}
          >
            {props.location}
          </Text>
        </VStack>
        <Text
          color={COLORS.Secondary.value}
          fontSize={"16px"}
          fontWeight={"400"}
          lineHeight={"30px"}
        >
          {props.note}
        </Text>
      </HStack>
      <Text
        color={COLORS.Secondary.value}
        fontSize={"16px"}
        fontWeight={"400"}
        lineHeight={"30px"}
      >
        “{props.review}”.
      </Text>
    </VStack>
  );
}
