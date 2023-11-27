import {
  Box,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Stack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import IReservationCardProps from "./props";
import Icon from "../../../contents/icon";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";

export default function ReservationCard(props: IReservationCardProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Stack
      direction={{ base: "column", md: "row", lg: "row", xl: "row" }}
      borderRadius={"25px"}
      w={"90%"}
      h={{ base: "full", md: "783px", lg: "783px", xl: "783px" }}
      bgColor={COLORS.Secondary.value}
      margin={"0"}
      padding={"0"}
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
    >
      <VStack spacing={"0px"} h="full">
        <Image
          h="600px"
          w="1000px"
          src="/images/class_g/Class_G_Orange_outside_front.jpg"
          borderTopLeftRadius={"25px"}
          borderTopRightRadius={{
            base: "25px",
            md: "0px",
            lg: "0px",
            xl: "0px",
          }}
        />
        <VStack
          w={"full"}
          h="full"
          justifyContent={"center"}
          alignItems={"center"}
          spacing={"9px"}
          bgColor={COLORS.Third.value}
          borderBottomLeftRadius={"25px"}
          borderBottomRightRadius={{
            base: "25px",
            md: "0px",
            lg: "0px",
            xl: "0px",
          }}
        >
          <Text
            startEnhancer={<Icon name="carDescription" />}
            color={COLORS.Primary.value}
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"27px"}
            letterSpacing={"-0.54px"}
          >
            {props.carName}
          </Text>
          <Text
            startEnhancer={<Icon name="lightning" />}
            color={COLORS.Primary.value}
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"27px"}
            letterSpacing={"-0.54px"}
          >
            {props.carPower} cv
          </Text>
          <Text
            startEnhancer={<Icon name="dollarCar" />}
            color={COLORS.Primary.value}
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"27px"}
            letterSpacing={"-0.54px"}
          >
            {props.rentPrice}/Day
          </Text>
          <HStack>
            <Text
              startEnhancer={<Icon name="wallet" />}
              color={COLORS.Primary.value}
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"27px"}
              letterSpacing={"-0.54px"}
            >
              {props.carDeposit}/Deposit
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <Box
        margin={{ base: "0px", md: "25px", lg: "25px", xl: "25px" }}
        w={"100%"}
        h={"94%"}
        bgColor={COLORS.Third.value}
        borderRadius={"15px"}
        padding={"40px"}
      >
        <VStack h="full" justifyContent={"left"} alignItems={"left"}>
          <VStack h="full" justifyContent={"left"} alignItems={"left"}>
            <Text
              startEnhancer={<Icon name="user" />}
              color={COLORS.Primary.value}
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"27px"}
              letterSpacing={"-0.54px"}
            >
              {props.email}
            </Text>
            <Text
              startEnhancer={<Icon name="phoneDesc" />}
              color={COLORS.Primary.value}
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"27px"}
              letterSpacing={"-0.54px"}
            >
              {props.phoneNumber}
            </Text>
            <Text
              startEnhancer={<Icon name="dateRange" />}
              color={COLORS.Primary.value}
              fontSize={"18px"}
              fontWeight={"500"}
              lineHeight={"27px"}
              letterSpacing={"-0.54px"}
            >
              {props.startDateRent?.replace(/-/g, "/")} -{" "}
              {props.endDateRent?.replace(/-/g, "/")}
            </Text>

            <Text
              color={COLORS.Primary.value}
              lineHeight={"24px"}
              fontSize={"18px"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              marginTop={{
                base: "40px",
                md: "100px",
                lg: "100px",
                xl: "100px",
              }}
            >
              Please be aware that the initial payment made to secure your
              reservation will be refunded to the original bank account used for
              the transaction. The refund process may take 14 business days to
              reflect in your account.
            </Text>
            <Text
              color={COLORS.Primary.value}
              lineHeight={"24px"}
              fontSize={"18px"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              marginTop={"20px"}
            >
              If you have any further questions or concerns regarding this
              cancellation, please do not hesitate to contact our customer
              support at help@rentCarEmirats.com. We appreciate your
              understanding in this matter.
            </Text>
            <Text
              color={COLORS.Primary.value}
              lineHeight={"24px"}
              fontSize={"18px"}
              fontStyle={"italic"}
              fontWeight={"bold"}
              marginTop={"20px"}
            >
              Thank you for considering RentCarEmirats for your car rental
              needs. We look forward to serving you in the future.
            </Text>
          </VStack>
          <HStack
            justifyContent={"space-between"}
            marginTop={{ base: "40px", md: "0px", lg: "0px", xl: "0px" }}
          >
            <Text
              startEnhancer={<Icon name="dollarRent" />}
              color={COLORS.Primary.value}
              fontSize={"24px"}
              fontWeight={"500"}
              lineHeight={"36px"}
              letterSpacing={"-0.72px"}
            >
              {props.totalPrice}
            </Text>
            <Button
              bgColor={COLORS.Secondary.value}
              w="250px"
              h="2.375rem"
              borderRadius=".3125rem"
              _hover={{
                filter: "saturate(200%)",
              }}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={onOpen}
            >
              <Text>Delete the reservation</Text>
            </Button>
          </HStack>
        </VStack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropFilter="auto" backdropBlur=".3125rem" />
        <ModalContent title="Delete" h="250px">
          <ModalCloseButton
            bgColor={COLORS.Secondary.value}
            color={COLORS.Third.value}
            _hover={{ filter: "saturate(200%)" }}
          />
          <ModalBody h="250px">
            <VStack h="full" justifyContent={"center"}>
              <Text
                color={COLORS.Primary.value}
                fontSize={"16px"}
                fontWeight={"bold"}
              >
                Are you sure you want to delete this reservation ?
              </Text>
              <HStack
                alignItems={"right"}
                justifyContent={"right"}
                spacing={"15px"}
              >
                <Button
                  bgColor={COLORS.Third.value}
                  border={"1px solid"}
                  borderColor={COLORS.Secondary.value}
                  w="100px"
                  h="2.375rem"
                  borderRadius=".3125rem"
                  _hover={{
                    filter: "saturate(200%)",
                  }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={onClose}
                >
                  <Text color={COLORS.Secondary.value}>Cancel</Text>
                </Button>
                <Button
                  bgColor={COLORS.Secondary.value}
                  w="100px"
                  h="2.375rem"
                  borderRadius=".3125rem"
                  _hover={{
                    filter: "saturate(200%)",
                  }}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={props.deleteReservation}
                >
                  <Text>Delete</Text>
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
