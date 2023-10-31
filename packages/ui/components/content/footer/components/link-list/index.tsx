import { VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../../../text";
import ILinkListProps from "./props";
import COLORS from "../../../../../constant/colors";
import Link from "../../../../navigation/link";

export default function LinkList(props: ILinkListProps) {
  return (
    <VStack alignItems={"left"} spacing={"20px"} w={"152px"}>
      <Text
        color={COLORS.Secondary.value}
        fontSize={"20px"}
        fontWeight={"600"}
        lineHeight={"50px"}
        letterSpacing={"-0.4px"}
      >
        {props.title}
      </Text>

      {props.content.map((e) => (
        <Link href={e.href} isExternal>
          <Text
            color={COLORS.Secondary.value}
            fontSize={"16px"}
            fontWeight={"500"}
            lineHeight={"24px"}
            letterSpacing={"-0.32px"}
          >
            {e.title}
          </Text>
        </Link>
      ))}
    </VStack>
  );
}
