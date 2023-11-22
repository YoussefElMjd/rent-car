import { Box, HStack, Image, Stack, VStack } from "@chakra-ui/react";
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
    <VStack
      w="100%"
      h="100%"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={"60px"}
    >
      <VStack>
        <InputText
          maxW="250px"
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
      </VStack>

      {rentData && (
        <HStack w="50%" h="70%" bg={COLORS.Third.value} borderRadius={"25px"}>
          <Box minW="400px" h="600px" w="400px" borderRadius={"25px"}>
            <Image
              h="600px"
              w="400px"
              src="/images/class_g/Class_G_Orange_outside_front.jpg"
              borderTopLeftRadius={"25px"}
              borderBottomLeftRadius={"25px"}
            />
          </Box>
          <VStack alignItems={"left"} spacing={"5px"} w="full">
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Reservation number: {rentData?.reservationNumber}
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Email: {rentData?.email}
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Phone Number: {rentData?.phoneNumber}
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Start Rent Date: {rentData?.startDateRent}
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              End Rent Date: {rentData?.endDateRent}
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Car Name: {rentData?.car.carName}
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Car Rent Price: {rentData?.car.rentPrice}€
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Car Rent Deposit: {rentData?.car.carDeposit}€
            </Text>
            <Text color={COLORS.Primary.value} fontWeight={"600"}>
              Car Power: {rentData?.car.carPower}cv
            </Text>
            <Stack w="full" justifyContent={"center"} alignItems={"center"}>
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
            </Stack>
          </VStack>
        </HStack>
      )}
    </VStack>
  );
}
