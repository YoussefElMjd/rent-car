import { Box } from "@chakra-ui/react";
import React from "react";
import COLORS from "../../../constant/colors";

export default function SectionSplit() {
  return (
    <Box
      margin="80px 63.502px 60px 66px"
      bgColor={COLORS.Secondary.value}
      height="5px"
      w={"100%"}
      borderRadius={"5px"}
    />
  );
}
