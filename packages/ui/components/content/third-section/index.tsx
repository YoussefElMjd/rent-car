import { Box, HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import Text from "../text";
import COLORS from "../../../constant/colors";
import StepCard from "../step-card";
import Icon from "../../../contents/icon";
import CarCard from "../car-card";
import TitleContent from "../Title-content";

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
    <VStack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={"3.125rem"}
    >
      <TitleContent
        title="Most popular car rental deals"
        content="A high-performing web-based car rental system for any rent-a-car
          company and website"
      />
      <HStack
        w="100%"
        overflow={"hidden"}
        flexWrap={"wrap"}
        spacing={"1.25rem"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {car.map((element) => element)}
      </HStack>
    </VStack>
  );
}
