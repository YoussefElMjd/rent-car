import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import Link from "../../navigation/link";
import Button from "../../inputs/button";
import IHeaderProps from "./props";
import BurgerMenu from "./components/burger-menu";

export default function Header(props: IHeaderProps) {
  return (
    <HStack
      alignItems={"center"}
      w={"100%"}
      spacing={{ base: ".625rem", lg: "3.125rem", xl: "7.3125rem" }}
      padding={{
        base: ".3125rem .625rem .3125rem .625rem",
        lg: ".9375rem 3.125rem .9375rem 3.125rem",
        xl: "1.75rem 9.375rem 1.75rem 9.375rem",
      }}
    >
      <Text
        color={COLORS.Secondary.value}
        fontSize={{ base: "1.875rem", lg: "2.25rem", xl: "2.25rem" }}
        fontWeight="700"
      >
        RentCarEmirates
      </Text>
      <HStack
        display={{ base: "none", md: "none", lg: "flex" }}
        spacing={{
          base: ".625rem",
          md: ".9375rem",
          lg: "1.875rem",
          xl: "2.4375rem",
        }}
        justifyContent={"right"}
        w="100%"
      >
        <Link
          onClick={() => props.onLinkClick("home")}
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Home
        </Link>
        <Link
          onClick={() => props.onLinkClick("step")}
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          How it Work
        </Link>
        <Link
          onClick={() => props.onLinkClick("catalogue")}
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Catalogues
        </Link>
        <Link
          onClick={() => props.onLinkClick("contact")}
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Why Choose Us
        </Link>
        <Link
          onClick={() => props.onLinkClick("review")}
          color={COLORS.Third.value}
          fontSize="1rem"
          fontWeight="700"
        >
          Review
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
      <HStack
        display={{ base: "flex", md: "flex", lg: "none" }}
        w="full"
        alignItems={"flex-end"}
        justifyContent={"flex-end"}
      >
        <BurgerMenu onLinkClick={props.onLinkClick} />
      </HStack>
    </HStack>
  );
}
