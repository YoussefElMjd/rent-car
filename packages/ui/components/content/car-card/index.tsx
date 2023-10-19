import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function CarCard() {
  return (
    <VStack
      alignItems={"center"}
      borderRadius={"15px"}
      width={"384px"}
      h={"538px"}
      border="2px solid lightgray"
      padding={"5px"}
      spacing={"24px"}
    >
      <Box w={"368px"} h="260px" bgColor={"red.100"} borderRadius={"15px"} />

      <VStack
        alignItems={"left"}
        justifyContent={"left"}
        spacing={"12px"}
        w="full"
      >
        <Text fontSize={"18px"}>Audi A8 L 2022</Text>
        <Text fontSize={"22px"} fontWeight={"600"}>
          78.90/day
        </Text>
      </VStack>

      <HStack
        alignContent={"center"}
        justifyContent={"space-evenly"}
        h={"fit-content"}
        w="336px"
        bgColor={"gray.100"}
        borderRadius={"15px"}
      >
        <Box height={"56px"} width={"56px"} bg={"blue"}></Box>
        <Box height={"56px"} width={"56px"} bg={"orange.200"}></Box>
        <Box height={"56px"} width={"56px"} bg={"green.300"}></Box>
        <Box height={"56px"} width={"56px"} bg={"purple.300"}></Box>
      </HStack>

      <Button
        variant="unstyled"
        w="336px"
        h={"fit-content"}
        bgColor={"white"}
        border={"1px solid black"}
        padding={"10px"}
        borderRadius={"25px"}
      >
        Rent now
      </Button>
    </VStack>
  );
}
