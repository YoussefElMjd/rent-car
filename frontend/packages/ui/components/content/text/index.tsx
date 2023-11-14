import React from "react";
import ITextProps from "./props";
import { Text as ChakraText } from "@chakra-ui/react";
import COLORS from "../../../constant/colors";

export default function Text(props: ITextProps) {
  return (
    <ChakraText
      {...props}
      w={props.w ?? "fit-content"}
      h={props.h ?? "fit-content"}
      fontFamily={"Plus Jakarta Sans"}
      fontSize={props.fontSize}
      fontStyle={"normal"}
      lineHeight={props.lineHeight ?? "3.375rem"}
      fontWeight={props.fontWeight ?? "500"}
      color={props.color ?? COLORS.Third.value}
    >
      {props.children}
    </ChakraText>
  );
}
