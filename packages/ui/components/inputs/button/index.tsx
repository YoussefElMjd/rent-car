import React from "react";
import IButtonProps from "./props";
import { Button as ChakraButton } from "@chakra-ui/react";
import COLORS from "../../../constant/colors";

export default function Button(props: IButtonProps) {
  return (
    <ChakraButton
      {...props}
      border={props.border ?? "none"}
      _hover={{
        filter: "saturate(200%)",
        bgColor: props.hoverBgColor ?? props.bgColor,
      }}
    >
      {props.children}
    </ChakraButton>
  );
}
