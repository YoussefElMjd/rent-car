import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import CarCard from "../car-card";
import ICatalogueProps from "./props";
import TitleContent from "../title-content";
import { useCatalogueLogics } from "./logic";

export default function CatalogueSection(props: ICatalogueProps) {
  const { carData } = useCatalogueLogics();
  console.log(carData);

  const car = [
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
    />,
    <CarCard
      title="Class G Mansory"
      pictures={[
        "/images/class_g/Class_G_Orange_outside_front.jpg",
        "/images/class_g/Class_G_Orange_outside.jpg",
        "/images/class_g/Class_G_Orange_inside.jpg",
      ]}
      pricePerDay="500"
      carId="1"
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
        {carData?.map((car) => (
          <CarCard
            title={car.carName}
            pictures={[
              "/images/class_g/Class_G_Orange_outside_front.jpg",
              "/images/class_g/Class_G_Orange_outside.jpg",
              "/images/class_g/Class_G_Orange_inside.jpg",
            ]}
            pricePerDay={car.rentPrice}
            carId={car.id}
          />
        ))}
        {/* {car.map((element, i) => element)} */}
      </HStack>
    </VStack>
  );
}
