import { Box, HStack, Stack } from "@chakra-ui/react";
import React from "react";
import COLORS from "../../../constant/colors";
import { motion } from "framer-motion";

export default function SectionSplit() {
  return (
    <HStack w={"100%"}>
      <Box
        margin="80px 63.502px 60px 66px"
        bgColor={COLORS.Secondary.value}
        height="5px"
        w={"100%"}
        borderRadius={"5px"}
        boxShadow={"0px 0px 100px 0px " + COLORS.Secondary.value}
      />
    </HStack>
  );
}
