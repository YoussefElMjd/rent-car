import React from "react";
import IButtonProps from "./props";
import { Link as CharkaLink } from "@chakra-ui/react";
import COLORS from "../../../constant/colors";

export default function Link(props: IButtonProps) {
  return (
    <CharkaLink
      {...props}
      fontFamily={"Plus Jakarta Sans"}
      textDecoration={"none"}
      _hover={{
        textDecoration: "underline",
        textDecorationColor: props.underLineColor ?? COLORS.Secondary.value,
      }}
    >
      {props.children}
    </CharkaLink>
  );
}
