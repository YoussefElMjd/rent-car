import { LinkProps } from "@chakra-ui/react";
import { Color } from "../../../constant/colors";

export default interface ILinkProps extends LinkProps {
  underLineColor?: Color;
  hoverFilter?: string | number | boolean | (string & {}) | undefined;
}
