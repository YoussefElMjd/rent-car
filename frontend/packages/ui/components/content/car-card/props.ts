import { StackProps } from "@chakra-ui/react";

export default interface ICarCardProps extends StackProps {
  title?: string;
  pictures?: string[];
  pricePerDay?: string | number;
  carId?: string;
}

export interface IUseCarCardLogicsProps {
  carId?: string;
}
