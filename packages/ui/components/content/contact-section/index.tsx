import { AspectRatio, HStack, Img, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import IconText from "../icon-text";
import Reveal from "../reveal";

export default function ContactSection() {
  return (
    <VStack padding="1.75rem 9.375rem 1.75rem 9.375rem" spacing={"40px"}>
      <VStack justifyContent={"center"} w="50%">
        <Text
          color={COLORS.Secondary.value}
          fontSize={"40px"}
          fontWeight={"500"}
        >
          Why chosose us
        </Text>
        <Text
          color={COLORS.Third.value}
          fontSize={"18px"}
          fontWeight={"400"}
          textAlign={"center"}
          lineHeight={"28px"}
        >
          A high-performing web-based car rental system for any rent-a-car
          company and website
        </Text>
      </VStack>
      <HStack alignItems={"left"} w="full" spacing="200px">
        <AspectRatio ratio={16 / 9} w={"566px"} h="526px">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29062.37337700031!2d54.449880337951406!3d24.423130400081583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e43c9279262a3%3A0x854feaec786d9d8c!2sPont%20Cheikh%20Zayed!5e0!3m2!1sfr!2sbe!4v1698613663706!5m2!1sfr!2sbe"
            width="100%"
            height="600"
            style={{ borderRadius: "15px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </AspectRatio>

        <VStack paddingTop="100px">
          <Reveal>
            <IconText
              iconName="phone"
              title="Customer Support"
              content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
            />
          </Reveal>
          <Reveal>
            <IconText
              iconName="price"
              title="Best Price Guarantted"
              content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
            />
          </Reveal>
          <Reveal>
            <IconText
              iconName="localisation"
              title="Many Location"
              content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."
            />
          </Reveal>
        </VStack>
      </HStack>
    </VStack>
  );
}
