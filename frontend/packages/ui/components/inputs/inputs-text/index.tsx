import { HStack, Input, VStack, border } from "@chakra-ui/react";
import IInputTextProps from "./props";
import React from "react";
import Text from "../../content/text";
import COLORS from "../../../constant/colors";

export default function InputText(props: IInputTextProps) {
  return (
    <VStack alignItems={"left"} spacing={"0px"} w="100%">
      <Text
        color={COLORS.Third.value}
        fontSize={"15px"}
        fontWeight={"800"}
        h="40px"
      >
        {props.label}
      </Text>

      <Input
        {...props}
        onChange={(e) => {
          props.onChange && props.onChange(e.currentTarget.value);
        }}
        type={props.type}
        placeholder={props.placeholder}
        bgColor={COLORS.Third.value}
        color={COLORS.Secondary.value}
        h={"35px"}
        w={"100%"}
        focusBorderColor={COLORS.Secondary.value}
        _hover={{ borderColor: COLORS.Secondary.value }}
        _placeholder={{ color: COLORS.Secondary.value, opacity: "0.5" }}
      />
    </VStack>
  );
}
