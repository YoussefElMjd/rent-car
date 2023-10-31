import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import COLORS from "../../../constant/colors";
import Text from "../text";
import Link from "../../navigation/link";
import Icon from "../../../contents/icon";
import LinkList from "./components/link-list";
import SectionSplit from "../section-split";

export default function Footer() {
  return (
    <VStack w="full" h="full" bgColor={COLORS.Third.value}>
      <HStack
        w="full"
        h="full"
        padding="5rem 3.75rem 3.75rem 3.75rem"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack alignItems={"left"} w="full" spacing={"1.25rem"}>
          <Text
            fontSize={"2rem"}
            color={COLORS.Secondary.value}
            fontWeight={"600"}
            lineHeight={"3rem"}
          >
            RentCarEmirates
          </Text>
          <Text
            fontSize={"1rem"}
            color={COLORS.Secondary.value}
            fontWeight={"500"}
            lineHeight={"1.5rem"}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </Text>
          <HStack
            w="full"
            justifyContent={"left"}
            marginInlineStart={"-1.25rem"}
            spacing={"1.25rem"}
          >
            <Link href="" isExternal w={"2.0625rem"} h={"2.0625rem"}>
              <Icon name="facebook" />
            </Link>
            <Link href="" isExternal w={"2.0625rem"} h={"2.0625rem"}>
              <Icon name="snapchat" />
            </Link>
            <Link
              href="https://www.instagram.com/rentacaremirats/"
              isExternal
              w={"2.0625rem"}
              h={"2.0625rem"}
            >
              <Icon name="instagram" />
            </Link>
          </HStack>
        </VStack>
        <HStack w="full" justifyContent={"center"} spacing={"9.375rem"}>
          <LinkList
            title="About"
            content={[
              { title: "How it works", href: "" },
              { title: "Featured", href: "" },
              { title: "Partnership", href: "" },
              { title: "Bussiness Relation", href: "" },
            ]}
          />
          <LinkList
            title="Community"
            content={[
              { title: "Event", href: "" },
              { title: "Blog", href: "" },
              { title: "Podcast", href: "" },
              { title: "Invite a friend", href: "" },
            ]}
          />
          <LinkList
            title="Socials"
            content={[
              { title: "Discord", href: "" },
              {
                title: "Instagram",
                href: "https://www.instagram.com/rentacaremirats/",
              },
              { title: "Twitter", href: "" },
              { title: "Facebook", href: "" },
            ]}
          />
        </HStack>
      </HStack>
      <SectionSplit color={COLORS.Fourth.value} h=".0938rem" opacity="0.1" />
      <HStack w="full" padding="0rem 3.75rem 3.75rem 3.75rem">
        <Text
          color={COLORS.Secondary.value}
          fontSize={"1rem"}
          fontWeight={"600"}
          lineHeight={"1.5rem"}
          letterSpacing={"-0.02rem"}
        >
          ©2023 RentCarEmirats. All rights reserved
        </Text>
      </HStack>
    </VStack>
  );
}
