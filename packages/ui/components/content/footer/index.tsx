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
        padding="80px 60px 60px 60px"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <VStack alignItems={"left"} w="full" spacing={"20px"}>
          <Text
            fontSize={"32px"}
            color={COLORS.Secondary.value}
            fontWeight={"600"}
            lineHeight={"48px"}
          >
            RentCarEmirates
          </Text>
          <Text
            fontSize={"16px"}
            color={COLORS.Secondary.value}
            fontWeight={"500"}
            lineHeight={"24px"}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </Text>
          <HStack
            w="full"
            justifyContent={"left"}
            marginInlineStart={"-20px"}
            spacing={"20px"}
          >
            <Link href="" isExternal w={"33px"} h={"33px"}>
              <Icon name="facebook" />
            </Link>
            <Link href="" isExternal w={"33px"} h={"33px"}>
              <Icon name="snapchat" />
            </Link>
            <Link
              href="https://www.instagram.com/rentacaremirats/"
              isExternal
              w={"33px"}
              h={"33px"}
            >
              <Icon name="instagram" />
            </Link>
          </HStack>
        </VStack>
        <HStack w="full" justifyContent={"center"} spacing={"150px"}>
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
      <SectionSplit color={COLORS.Fourth.value} h="1.5px" opacity="0.1" />
      <HStack w="full" padding="0px 60px 60px 60px">
        <Text
          color={COLORS.Secondary.value}
          fontSize={"16px"}
          fontWeight={"600"}
          lineHeight={"24px"}
          letterSpacing={"-0.32px"}
        >
          ©2023 RentCarEmirats. All rights reserved
        </Text>
      </HStack>
    </VStack>
  );
}
