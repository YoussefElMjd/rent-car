import { ChakraProps, HStack } from "@chakra-ui/react";
export default interface IBurgerMenuProps extends ChakraProps {
  onLinkClick: (e: string) => void;
}
