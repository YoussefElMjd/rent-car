import { AspectRatio, Stack } from "@chakra-ui/react";
import React from "react";
import IVideoProps from "./props";
import COLORS from "../../../constant/colors";

export default function VideoBackground(props: IVideoProps) {
  return (
    <Stack
      {...props}
      mt="4"
      w={props.w ?? "100%"}
      h={props.h}
      boxShadow={"0rem 0rem 3.125rem -0.3125rem " + COLORS.Third.value}
      overflow={"hidden"}
      backgroundColor={"rgba(0,0,0,0.2)"}
    >
      <AspectRatio
        ratio={16 / 9}
        top={{ base: "0rem", lg: "-10rem", xl: "-10rem" }}
      >
        <video autoPlay muted loop>
          <source src={props.src} type="video/mp4" />
        </video>
      </AspectRatio>
    </Stack>
  );
}
