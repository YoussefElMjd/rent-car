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
        margin="80px 60px 60px 60px"
        bgColor={props.color ?? COLORS.Secondary.value}
        height={props.h ?? "5px"}
        w={"100%"}
        borderRadius={"5px"}
        boxShadow={"0px 0px 100px 0px " + props.color ?? COLORS.Secondary.value}
      />
    </HStack>
  );
}
