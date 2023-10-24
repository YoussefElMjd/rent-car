import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Link from "../../navigation/link";
import Button from "../../inputs/button";

export default function Header() {
  return (
    <HStack alignItems={"center"} w={"100%"} spacing="117px">
      <Text color={COLORS.Secondary.value} fontSize="36px" fontWeight="700">
        RentCarEmirates
      </Text>
      <HStack spacing={"39px"} justifyContent={"right"} w="100%">
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
          Testimonial
        </Link>

        <Box
          h="21px"
          bg={COLORS.Secondary.value}
          w="1px"
          padding="0px"
          margin={"-20px"}
          marginRight={"-32px"}
        />
        <HStack>
          <Button
            bgColor={"transparent"}
            w="82px"
            h="38px"
            _hover={{
              filter: "saturate(200%)",
            }}
          >
            <Text
              color={COLORS.Third.value}
              fontSize={"14px"}
              textDecoration={"underline"}
            >
              Register
            </Text>
          </Button>
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
    </HStack>
  );
}
