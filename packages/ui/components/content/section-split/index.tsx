import { Box, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import COLORS from "../../../constant/colors";
import { motion } from "framer-motion";
import ISectionSplitProps from "./props";

export default function SectionSplit(props: ISectionSplitProps) {
  return (
    <HStack w={"100%"}>
      <Box
        opacity={props.opacity}
        margin="5rem 3.75rem 3.75rem 3.75rem"
        bgColor={props.color ?? COLORS.Secondary.value}
        height={props.h ?? ".3125rem"}
        w={"100%"}
        borderRadius={".3125rem"}
        boxShadow={
          "0rem 0rem 6.25rem 0rem " + props.color ?? COLORS.Secondary.value
        }
      />
    </HStack>
  );
}
