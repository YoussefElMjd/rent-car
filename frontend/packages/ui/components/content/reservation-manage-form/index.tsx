import { Box, HStack, Image, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import InputText from "../../inputs/inputs-text";
import useReservationManageFormLogics from "./logic";
import Button from "../../inputs/button";
import COLORS from "../../../constant/colors";
import Text from "../text";
import Icon from "../../../contents/icon";
import ReservationCard from "../reservation-card";

export default function ReservationManageForm() {
  const { form, rentData, deleteReservation } =
    useReservationManageFormLogics();

  return (
    <VStack
      w="100%"
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={"60px"}
      paddingBottom={"500px"}
    >
      <VStack>
        <InputText
          minW="300px"
          maxW="300px"
          label="Reservation Number"
          placeholder="Enter Your Reservation Number"
          _placeholder={{
            fontSize: "15px",
            color: COLORS.Secondary.value,
            opacity: "0.5",
          }}
          value={form.reservationNumber.value}
          onChange={form.reservationNumber.onChange}
          endEnhancer={<Icon name="search" />}
        />
        <Button
          bgColor={COLORS.Secondary.value}
          w="125px"
          h="2.375rem"
          borderRadius=".3125rem"
          _hover={{
            filter: "saturate(200%)",
          }}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={form.submitForm}
        >
          <Text>Find</Text>
        </Button>
      </VStack>

      {rentData && (
        <ReservationCard
          carName={rentData.car.carName}
          carDeposit={rentData.car.carDeposit}
          rentPrice={rentData.car.rentPrice}
          carPower={rentData.car.carPower}
          email={rentData.email}
          startDateRent={rentData.startDateRent}
          endDateRent={rentData.endDateRent}
          phoneNumber={rentData.phoneNumber}
          totalPrice={"null"}
        />
      )}
    </VStack>
  );
}
