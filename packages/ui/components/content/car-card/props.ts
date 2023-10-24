import { StackProps } from "@chakra-ui/react";

export default interface ICarCardProps extends StackProps {
  title: string;
  pictures: string[];
  pricePerDay: string;
}
