import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Link from "../../navigation/link";
import Button from "../../inputs/button";

export default function Header() {
  return (
    <HStack
      alignItems={"center"}
      w={"100%"}
      spacing="7.3125rem"
      padding="1.75rem 9.375rem 1.75rem 9.375rem"
    >
      <Text color={COLORS.Secondary.value} fontSize="2.25rem" fontWeight="700">
        RentCarEmirates
      </Text>
      <HStack spacing={"2.4375rem"} justifyContent={"right"} w="100%">
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Home
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          How it Work
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Rental Details
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Why Choose Us
        </Link>
        <Link
          href="https://github.com/"
          hoverFilter="opacity(80%)"
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Testimonial
        </Link>

        <Box
          h="1.3125rem"
          bg={COLORS.Secondary.value}
          w=".0625rem"
          padding="0rem"
          margin={"-1.25rem"}
          marginRight={"-2rem"}
        />
        <HStack>
          <Button
            bgColor={"transparent"}
            w="5.125rem"
            h="2.375rem"
            _hover={{
              filter: "saturate(200%)",
            }}
          >
            <Text
              color={COLORS.Third.value}
              fontSize={".875rem"}
              textDecoration={"underline"}
            >
              Register
            </Text>
          </Button>
          <Button
            bgColor={COLORS.Secondary.value}
            w="5.125rem"
            h="2.375rem"
            borderRadius=".3125rem"
            _hover={{
              filter: "saturate(200%)",
            }}
          >
            <Text color={COLORS.Third.value} fontSize={".875rem"}>
              Login
            </Text>
          </Button>
        </HStack>
      </HStack>
    </HStack>
  );
}
