import { ChakraProps } from "@chakra-ui/react";
import Icons from "../../../contents/icon/icons";

export default interface IIConTextProps extends ChakraProps {
  iconName: keyof typeof Icons;
  title: string;
  content: string;
}
