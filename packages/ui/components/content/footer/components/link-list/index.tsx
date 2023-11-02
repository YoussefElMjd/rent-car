import { VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../../../text";
import ILinkListProps from "./props";
import COLORS from "../../../../../constant/colors";
import Link from "../../../../navigation/link";

export default function LinkList(props: ILinkListProps) {
  return (
    <VStack
      alignItems={{ base: "center", lg: "left", xl: "left" }}
      spacing={"1.25rem"}
      w={"9.5rem"}
    >
      <Text
        color={COLORS.Secondary.value}
        fontSize={{ base: "18px", lg: "1.25rem", xl: "1.25rem" }}
        fontWeight={"600"}
        lineHeight={"3.125rem"}
        letterSpacing={"-0.025rem"}
      >
        {props.title}
      </Text>

      {props.content.map((e, i) => (
        <Link href={e.href} isExternal key={i}>
          <Text
            color={COLORS.Secondary.value}
            fontSize={{ base: "12px", lg: "1rem", xl: "1rem" }}
            fontWeight={"500"}
            lineHeight={"1.5rem"}
            letterSpacing={"-0.02rem"}
          >
            {e.title}
          </Text>
        </Link>
      ))}
    </VStack>
  );
}
