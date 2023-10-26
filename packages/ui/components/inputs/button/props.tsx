import { ButtonProps } from "@chakra-ui/react";

export default interface IButtonProps extends ButtonProps {
  hoverBgColor?: string;
  ref?: React.MutableRefObject<HTMLButtonElement | null>;
}
