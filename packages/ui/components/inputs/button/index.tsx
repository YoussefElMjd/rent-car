import React from "react";
import IButtonProps from "./props";
import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button(props: IButtonProps) {
  return (
    <ChakraButton
      {...props}
      border={props.border ?? "none"}
      _hover={{ filter: "saturate(200%)" }}
    >
      {props.children}
    </ChakraButton>
  );
}
