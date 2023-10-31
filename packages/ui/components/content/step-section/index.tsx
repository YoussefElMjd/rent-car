import { HStack, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import StepCard from "../step-card";
import Icon from "../../../contents/icon";
import TitleContent from "../title-content";
import IStepProps from "./props";

export default function StepSection(props: IStepProps) {
  return (
    <VStack ref={props.ref} spacing={"3rem"}>
      <TitleContent
        title="How it work"
        content="A high-performing web-based car rental system for any rent-a-car
          company and website"
      />
      <HStack w="100%" spacing="0rem" justifyContent={"center"}>
        <StepCard
          name="localisationBig"
          title="Choose Location"
          content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
        />
        <Stack>
          <Icon name="stepLine" />
        </Stack>
        <StepCard
          name="calendar"
          title="Pick-up Date"
          content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
        />
        <Stack w="fit-content">
          <Icon name="stepLine" />
        </Stack>
        <StepCard
          name="car"
          title="Book your car"
          content="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis."
        />
      </HStack>
    </VStack>
  );
}
