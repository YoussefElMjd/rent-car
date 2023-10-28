import { AspectRatio, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import IVideoProps from "./props";
import COLORS from "../../../constant/colors";

export default function VideoBackground(props: IVideoProps) {
  return (
    <Stack
      {...props}
      mt="4"
      w={props.w ?? "100%"}
      h={props.h}
      boxShadow={"0px 0px 50px -5px " + COLORS.Third.value}
      overflow={"hidden"}
      backgroundColor={"rgba(0,0,0,0.2)"}
    >
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="youtube-video"
          src={
            props.src +
            "?&vq=hd1080&vw=hd1080&start=3&mute=1&autoplay=1&controls=0&loop=1&rel=0&modestbranding=0&showinfo=0&playlist=" +
            props.idVideo
          }
          tabIndex={-1}
          webkit-playsinline=""
          allowFullScreen={true}
          style={{
            zIndex: -50,
            width: "100%",
            height: "100%",
            top: "-160px",
          }}
        />
      </AspectRatio>
    </Stack>
  );
}
