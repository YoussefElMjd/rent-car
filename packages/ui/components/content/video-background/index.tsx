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
      <AspectRatio ratio={16 / 9}>
        <iframe
          className="youtube-video"
          src={
            props.src +
            "?&vq=hd1080&start=3&mute=1&autoplay=1&controls=0&loop=1&rel=0&modestbranding=0&showinfo=0&playlist=" +
            props.idvideo
          }
          tabIndex={-1}
          webkit-playsinline=""
          allowFullScreen={true}
          style={{
            zIndex: -50,
            width: "100%",
            height: "100%",
            top: "-10rem",
          }}
        />
      </AspectRatio>
    </Stack>
  );
}
