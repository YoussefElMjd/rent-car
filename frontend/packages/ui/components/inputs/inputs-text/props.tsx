import { InputProps } from "@chakra-ui/react";
import { ReactElement } from "react";

export default interface IInputTextProps extends InputProps {
  label?: string;
  onChange?: (value: any) => void;
  endEnhancer?: ReactElement;
}
