import {
  Box,
  HStack,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ICarCardProps from "./props";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";
import Icon from "../../../contents/icon";
import { motion, useAnimationControls } from "framer-motion";
import Text from "../text";
import Reveal from "../reveal";

export default function CarCard(props: ICarCardProps) {
  const [index, setIndex] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      padding={"1.5rem"}
      bgColor={COLORS.Third.value}
      w="19rem"
      h="28.125rem"
      borderRadius={".625rem"}
      spacing={"0rem"}
    >
      <Reveal>
        <Text
          color={COLORS.Secondary.value}
          fontSize={"1.25rem"}
          fontWeight={700}
        >
          {props.title}
        </Text>
      </Reveal>
      <Reveal>
        <Stack h={"18.75rem"} w="full" position={"relative"}>
          <Img height="18.75rem" src={props.pictures[1]} onClick={onOpen} />
        </Stack>
      </Reveal>
      <Reveal>
        <HStack
          w="100%"
          justifyContent={"space-between"}
          marginInlineStart={"0rem"}
          paddingInlineStart={"0rem"}
        >
          <HStack spacing={"0rem"}>
            <Text
              color={COLORS.Secondary.value}
              fontSize={"1.25rem"}
              fontWeight={700}
            >
              €{props.pricePerDay}.00/
            </Text>
            <Text
              color={COLORS.Fourth.value}
              fontSize={".875rem"}
              fontWeight={700}
              paddingTop={".3125rem"}
            >
              day
            </Text>
          </HStack>
          <Button
            w="7.25rem"
            h="2.75rem"
            bgColor={COLORS.Primary.value}
            hoverBgColor={COLORS.Primary.value}
            onClick={() => props.onClick}
          >
            <Text
              color={COLORS.Secondary.value}
              fontSize={"1rem"}
              fontWeight={"600"}
            >
              Rent now
            </Text>
          </Button>
        </HStack>
      </Reveal>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="auto" backdropBlur=".125rem" />
        <ModalContent
          minW={{ base: "full", lg: "50rem", xl: "50rem" }}
          h={"50rem"}
          justifyContent="center"
          alignItems="center"
          borderRadius={".9375rem"}
        >
          <VStack>
            <Text
              color={COLORS.Secondary.value}
              fontSize={"1.875rem"}
              fontWeight={"700"}
              textTransform={"uppercase"}
            >
              {props.title}
            </Text>
            <ModalCloseButton
              bgColor={COLORS.Secondary.value}
              color={COLORS.Third.value}
              _hover={{ filter: "saturate(200%)" }}
            />
            <ModalBody>
              <Stack
                position={"relative"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={{ base: "column", lg: "row", xl: "row" }}
              >
                <Button
                  display={{ base: "none", lg: "flex", xl: "flex" }}
                  paddingInlineStart={"10px"}
                  bgColor="transparent"
                  w="fit-content"
                  onClick={getPreviousPicture}
                  zIndex={1}
                >
                  <Icon name="previousArrow" />
                </Button>
                <Box
                  display={{ base: "none", lg: "flex", xl: "flex" }}
                  w="full"
                >
                  <motion.img
                    animate={controls}
                    style={{ height: "700px", borderRadius: "1.5625rem" }}
                    src={props.pictures[index]}
                  />
                </Box>
                <Box
                  display={{ base: "flex", lg: "none", xl: "none" }}
                  w="full"
                >
                  <motion.img
                    animate={controls}
                    style={{
                      height: "600px",
                      minWidth: "300px",
                      borderRadius: "1.5625rem",
                    }}
                    src={props.pictures[index]}
                  />
                </Box>

                <Button
                  display={{ base: "none", lg: "flex", xl: "flex" }}
                  paddingInlineEnd={"0"}
                  bgColor="transparent"
                  w="fit-content"
                  onClick={getNextPicture}
                >
                  <Icon name="nextArrow" />
                </Button>

                <HStack
                  display={{ base: "flex", lg: "none", xl: "none" }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="full"
                  spacing={"100px"}
                >
                  <Button
                    paddingInlineStart={"10px"}
                    bgColor="transparent"
                    w="fit-content"
                    onClick={getPreviousPicture}
                    zIndex={1}
                  >
                    <Icon name="previousArrow" />
                  </Button>
                  <Button
                    paddingInlineEnd={"0"}
                    bgColor="transparent"
                    w="fit-content"
                    onClick={getNextPicture}
                  >
                    <Icon name="nextArrow" />
                  </Button>
                </HStack>
              </Stack>
            </ModalBody>
          </VStack>
        </ModalContent>
      </Modal>
    </VStack>
  );
}
