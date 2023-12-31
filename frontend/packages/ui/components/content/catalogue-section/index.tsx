import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import CarCard from "../car-card";
import ICatalogueProps from "./props";
import TitleContent from "../title-content";
import { useCatalogueLogics } from "./logic";

export default function CatalogueSection(props: ICatalogueProps) {
  const { carData } = useCatalogueLogics();

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
            pictures={car.imageUrls}
            pricePerDay={car.rentPrice}
            carId={car.id}
          />
        ))}
      </HStack>
    </VStack>
  );
}
