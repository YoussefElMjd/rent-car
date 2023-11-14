import { Box } from "@chakra-ui/react";
import Icon from "../../../contents/icon";
import React from "react";
import ICustomIconProps from "./props";

export default function CustomIcon(props: ICustomIconProps) {
  return (
    <Box {...props}>
      <Icon name={props.name} />
    </Box>
  );
}
