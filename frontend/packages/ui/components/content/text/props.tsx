import { TextProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export default interface ITextProps extends TextProps {
  startEnhancer?: ReactElement;
}
