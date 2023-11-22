import { VStack } from "@chakra-ui/react";
import Header from "../../../../packages/ui/components/content/header";
import ReservationManageForm from "./../../../../packages/ui/components/content/reservation-manage-form/index";

export default function Reservation() {
  return (
    <VStack overflow="hidden">
      <ReservationManageForm />
    </VStack>
  );
}
