import { Box, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import IReservationCardProps from "./props";
import Icon from "../../../contents/icon";
import COLORS from "../../../constant/colors";
import Button from "../../inputs/button";

export default function ReservationCard(props: IReservationCardProps) {
  return (
    <Stack
      direction={{ base: "column", md: "row", lg: "row", xl: "row" }}
      borderRadius={"25px"}
      w={"90%"}
      h={"783px"}
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
          </VStack>
          <HStack justifyContent={"space-between"}>
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
              onClick={props.deleteReservation}
            >
              <Text>Delete the reservation</Text>
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Stack>
  );
}
