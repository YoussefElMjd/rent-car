import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Link from "../../../../navigation/link";
import COLORS from "../../../../../constant/colors";
import IBurgerMenuProps from "./props";
import Button from "../../../../inputs/button";
import Icon from "../../../../../contents/icon";
export default function BurgerMenu(props: IBurgerMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Stack {...props} display={props.display}>
      <Button ref={btnRef} onClick={onOpen} bgColor={COLORS.Secondary.value}>
        <Icon name="menu" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bgColor={COLORS.Primary.value}
          color={COLORS.Secondary.value}
        >
          <DrawerHeader justifyContent={"center"} alignItems={"center"}>
            Menu
          </DrawerHeader>
          <DrawerCloseButton
            mt={".625rem"}
            bgColor={COLORS.Secondary.value}
            color={COLORS.Third.value}
          />

          <DrawerBody>
            <VStack w="100%" h="100%" bgColor={"black"}>
              <Link
                onClick={() => {
                  props.onLinkClick("home"), onClose();
                }}
                color={COLORS.Third.value}
                fontSize="1rem"
                fontWeight="700"
              >
                Home
              </Link>
              <Link
                onClick={() => {
                  props.onLinkClick("step"), onClose();
                }}
                color={COLORS.Third.value}
                fontSize="1rem"
                fontWeight="700"
              >
                How it Work
              </Link>
              <Link
                onClick={() => {
                  props.onLinkClick("catalogue"), onClose();
                }}
                color={COLORS.Third.value}
                fontSize="1rem"
                fontWeight="700"
              >
                Catalogues
              </Link>
              <Link
                onClick={() => {
                  props.onLinkClick("contact"), onClose();
                }}
                color={COLORS.Third.value}
                fontSize="1rem"
                fontWeight="700"
              >
                Why Choose Us
              </Link>
              <Link
                onClick={() => {
                  props.onLinkClick("review"), onClose();
                }}
                color={COLORS.Third.value}
                fontSize="1rem"
                fontWeight="700"
              >
                Review
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              bgColor={COLORS.Primary.value}
              color={COLORS.Third.value}
              mr={3}
              onClick={onClose}
              hoverBgColor={"rgba(255,255,255,0.1)"}
            >
              Cancel
            </Button>
            <Button bgColor={COLORS.Secondary.value} color={COLORS.Third.value}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}
