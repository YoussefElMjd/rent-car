import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import CarCard from "../car-card";
import TitleContent from "../title-content";
import ICatalogueProps from "./props";

export default function CatalogueSection(props: ICatalogueProps) {
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
      ref={props.ref}
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
        {car.map((element, i) => element)}
      </HStack>
    </VStack>
  );
}
