import { BoxProps } from "@chakra-ui/react";
import Icons from "../../../contents/icon/icons";

export default interface ICustomIconProps extends BoxProps {
  name: keyof typeof Icons;
}
