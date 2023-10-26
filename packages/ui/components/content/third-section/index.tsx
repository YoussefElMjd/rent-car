import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import StepCard from "../step-card";
import Icon from "../../../contents/icon";
import CarCard from "../car-card";

export default function ThirdSection() {
  const car = [
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
    />,
  ];
  return (
    <VStack justifyContent={"center"} alignItems={"center"}>
      <Text color={COLORS.Secondary.value} fontSize={"48px"} fontWeight={500}>
        Most popular car rental deals
      </Text>
      <Box w="500px" marginBottom={"50px"}>
        <Text
          color={COLORS.Third.value}
          fontSize={"18px"}
          fontWeight={400}
          textAlign={"center"}
          lineHeight={"27px"}
        >
          A high-performing web-based car rental system for any rent-a-car
          company and website
        </Text>
      </Box>
      <HStack
        w="100%"
        overflow={"hidden"}
        flexWrap={"wrap"}
        spacing={"20px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {car.map((element) => element)}
      </HStack>
    </VStack>
  );
}
