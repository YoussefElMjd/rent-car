import { HStack, Stack, VStack } from "@chakra-ui/react";
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
      <Stack
        direction={{ base: "column", lg: "row", xl: "row" }}
        w="full"
        h="full"
        padding={{
          base: "20px 15px 15px 15px",
          lg: "40px 30px 30px 30px",
          xl: "5rem 3.75rem 3.75rem 3.75rem",
        }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
      >
        <VStack
          alignItems={{
            base: "center",
          }}
          w="full"
          spacing={{ base: "10px", lg: "1.25rem", xl: "1.25rem" }}
        >
          <Text
            fontSize={{
              base: "28px",
              lg: "28px",
              xl: "32px",
            }}
            color={COLORS.Secondary.value}
            fontWeight={"600"}
            lineHeight={{ base: "30px", lg: "48px", xl: "48px" }}
          >
            RentCarEmirates
          </Text>
          <Text
            fontSize={{
              base: "14px",
              lg: "14px",
              xl: "1rem",
            }}
            color={COLORS.Secondary.value}
            fontWeight={"500"}
            lineHeight={"1.5rem"}
            textAlign={"center"}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </Text>
          <HStack
            w="full"
            justifyContent={"center"}
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
        <HStack
          w={{ lg: "full", xl: "full" }}
          justifyContent={"center"}
          spacing={{
            base: "0px",
            lg: "50px",
            xl: "150px",
          }}
          paddingTop={{ base: "50px" }}
          marginBottom={{ base: "-50px" }}
        >
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
      </Stack>
      <SectionSplit color={COLORS.Fourth.value} h=".0938rem" opacity="0.1" />
      <HStack
        w="full"
        padding={{
          base: "0px 0px 15px 0px",
          lg: "40px 30px 30px 30px",
          xl: "5rem 3.75rem 3.75rem 3.75rem",
        }}
        marginTop={{ base: "-20px" }}
        alignItems={{ base: "center" }}
        justifyContent={{ base: "center" }}
      >
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
