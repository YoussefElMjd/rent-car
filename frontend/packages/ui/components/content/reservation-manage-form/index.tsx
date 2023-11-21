import { VStack } from "@chakra-ui/react";
import React from "react";
import InputText from "../../inputs/inputs-text";
import useReservationManageFormLogics from "./logic";
import Button from "../../inputs/button";
import COLORS from "../../../constant/colors";
import Text from "../text";

export default function ReservationManageForm() {
  const { form, rentData, deleteReservation } =
    useReservationManageFormLogics();

  return (
    <VStack>
      <InputText
        label="Reservation Number"
        placeholder="Enter Your Reservation Number"
        value={form.reservationNumber.value}
        onChange={form.reservationNumber.onChange}
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

      <Text>{rentData?.reservationNumber}</Text>
      <Text>{rentData?.email}</Text>
      <Text>{rentData?.phonenumber}</Text>
      <Text>{rentData?.startDateRent}</Text>
      <Text>{rentData?.endDateRent}</Text>
      {rentData && (
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
          onClick={deleteReservation}
        >
          <Text>Delete the reservation</Text>
        </Button>
      )}
    </VStack>
  );
}
