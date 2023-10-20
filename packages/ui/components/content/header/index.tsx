import React from "react";
import { HStack } from "@chakra-ui/react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Link from "../../navigation/link";
import Button from "../../inputs/button";

export default function Header() {
  return (
    <HStack
      padding={"28px 63.502px 28px 66px"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing="117px"
    >
      <Text color={COLORS.Secondary.value} fontSize="36px" fontWeight="700">
        RentCarEmirates
      </Text>
      <HStack spacing={"39px"}>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="16px"
          fontWeight="700"
        >
          Home
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="16px"
          fontWeight="700"
        >
          How it Work
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="16px"
          fontWeight="700"
        >
          Rental Details
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="16px"
          fontWeight="700"
        >
          Why Choose Us
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="16px"
          fontWeight="700"
        >
          Why Choose Us
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="16px"
          fontWeight="700"
        >
          Why Choose Us
        </Link>
        <Button
          bgColor={COLORS.Secondary.value}
          w="82px"
          h="38px"
          borderRadius="5px"
          _hover={{
            filter: "saturate(200%)",
          }}
        >
          <Text color={COLORS.Third.value} fontSize={"14px"}>
            Login
          </Text>
        </Button>
      </HStack>
    </HStack>
  );
}
