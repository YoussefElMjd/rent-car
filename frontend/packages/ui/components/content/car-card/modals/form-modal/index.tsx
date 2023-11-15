import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import COLORS from "../../../../../constant/colors";
import InputText from "../../../../inputs/inputs-text";
import { DateRangePicker } from "react-date-range";
import Button from "../../../../inputs/button";
import Text from "../../../text";
import moment from "moment";
import { useCarCardLogic } from "../../logic";
import IFormModalProps from "./props";

export default function FormModal(props: IFormModalProps) {
  const { form } = useCarCardLogic({ carId: props.carId });
  const selectionRange = {
    startDate: form.startRentDate.value,
    endDate: form.endRentDate.value,
    key: "selection",
  };

  function handleSelect(ranges: any) {
    console.log(moment(ranges.selection.startDate).format("DD-MM-YYYY"));
    form.startRentDate.onChange(ranges.selection.startDate);
    form.endRentDate.onChange(ranges.selection.endDate);
    selectionRange.startDate = ranges.selection.startDate;

    selectionRange.endDate = ranges.selection.endDate;
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay backdropFilter="auto" backdropBlur=".125rem" />
      <ModalContent
        minW={{ base: "full", lg: "50rem", xl: "50rem" }}
        h={"50rem"}
        justifyContent="center"
        alignItems="center"
        borderRadius={".9375rem"}
        bgColor={COLORS.Primary.value}
      >
        <VStack>
          <ModalCloseButton
            bgColor={COLORS.Secondary.value}
            color={COLORS.Third.value}
            _hover={{ filter: "saturate(200%)" }}
          />
          <ModalBody>
            <VStack
              position={"relative"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <InputText
                {...form.email}
                type="email"
                label="Email Address"
                placeholder="Enter your email address"
              />
              <InputText
                {...form.phoneNumber}
                type="number"
                label="Phone Number"
                placeholder="Enter your phone number"
                marginBottom={"35px"}
              />
              <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
                rangeColors={[COLORS.Secondary.value]}
                staticRanges={[]}
                inputRanges={[]}
                minDate={new Date()}
              />
              <Button
                w="7.25rem"
                h="2.75rem"
                bgColor={COLORS.Third.value}
                hoverBgColor={COLORS.Third.value}
                onClick={() => {
                  form.submitForm();
                }}
              >
                <Text
                  color={COLORS.Secondary.value}
                  fontSize={"1rem"}
                  fontWeight={"600"}
                >
                  Rent now
                </Text>
              </Button>
            </VStack>
          </ModalBody>
        </VStack>
      </ModalContent>
    </Modal>
  );
}
