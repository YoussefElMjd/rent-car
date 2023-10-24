import { Box, HStack, Img, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import ICarCardProps from "./props";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";
import Icon from "../../../contents/icon";
import { motion, useAnimationControls } from "framer-motion";

export default function CarCard(props: ICarCardProps) {
  const [index, setIndex] = useState<number>(0);
  const controls = useAnimationControls();

  function setAnimationNext() {
    controls.set({ opacity: 0, x: 70 });
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
  }
  function setAnimationPrevious() {
    controls.set({ opacity: 0, x: -70 });
    controls.start({ opacity: 1, x: 0, transition: { duration: 0.5 } });
  }
  function getNextPicture() {
    if (index == props.pictures.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    setAnimationNext();
  }
  function getPreviousPicture() {
    if (index == 0) {
      setIndex(props.pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
    setAnimationPrevious();
  }

  return (
    <VStack
      padding={"24px"}
      bgColor={COLORS.Third.value}
      w="304px"
      h="450px"
      borderRadius={"10px"}
      spacing={"20px"}
    >
      <Text color={COLORS.Secondary.value} fontSize={"20px"} fontWeight={700}>
        {props.title}
      </Text>
      <Stack h={"300px"} w="full" position={"relative"}>
        <Button
          paddingInlineStart={"0"}
          bgColor="transparent"
          w="fit-content"
          position={"absolute"}
          top="44%"
          onClick={getPreviousPicture}
          zIndex={1}
        >
          <Icon name="previousArrow" />
        </Button>
        <motion.img
          animate={controls}
          style={{ height: "300px" }}
          src={props.pictures[index]}
        />
        <Button
          paddingInlineEnd={"0"}
          bgColor="transparent"
          w="fit-content"
          position={"absolute"}
          right={"0"}
          top="44%"
          onClick={getNextPicture}
        >
          <Icon name="nextArrow" />
        </Button>
      </Stack>
      <HStack
        w="100%"
        justifyContent={"space-between"}
        marginInlineStart={"0px"}
        paddingInlineStart={"0px"}
      >
        <HStack spacing={"0px"}>
          <Text
            color={COLORS.Secondary.value}
            fontSize={"20px"}
            fontWeight={700}
          >
            €{props.pricePerDay}.00/
          </Text>
          <Text
            color={COLORS.Fourth.value}
            fontSize={"14px"}
            fontWeight={700}
            paddingTop={"5px"}
          >
            day
          </Text>
        </HStack>

        <Button
          w="116px"
          h="44px"
          bgColor={COLORS.Primary.value}
          hoverBgColor={COLORS.Primary.value}
          onClick={() => props.onClick}
        >
          <Text
            color={COLORS.Secondary.value}
            fontSize={"16px"}
            fontWeight={"600"}
          >
            Rent now
          </Text>
        </Button>
      </HStack>
    </VStack>
  );
}
