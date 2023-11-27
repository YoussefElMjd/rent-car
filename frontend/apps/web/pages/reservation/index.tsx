import { HStack, VStack } from "@chakra-ui/react";
import Header from "../../../../packages/ui/components/content/header";
import ReservationManageForm from "./../../../../packages/ui/components/content/reservation-manage-form/index";
import Text from "../../../../packages/ui/components/content/text";
import COLORS from "../../../../packages/ui/constant/colors";
import Link from "../../../../packages/ui/components/navigation/link";

export default function Reservation() {
  return (
    <VStack overflow="hidden">
      <ReservationManageForm />
    </VStack>
  );
}
