import { ChakraProps } from "@chakra-ui/react";

export default interface IReviewProps extends ChakraProps {
  name: string;
  location: string;
  review: string;
  note: string;
}
