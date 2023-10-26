import { Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Button from "../../inputs/button";
import React from "react";
import Icon from "../../../contents/icon";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = "/audios/Dyltronn.mp3";
  const audio = useRef<HTMLAudioElement | null>(null);
  if (audio.current) {
    audio.current.volume = 0.05;
    audio.current.loop = true;
  }
  const toggleAudio = () => {
    if (audio.current) {
      if (isPlaying) {
        audio.current.pause();
      } else {
        audio.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Box
      mt="4"
      textAlign="center"
      position={"fixed"}
      right={0}
      top={".9375rem"}
      zIndex={"10"}
    >
      <audio
        ref={audio}
        src={audioSrc}
        autoPlay={isPlaying}
        onEnded={toggleAudio}
      />
      <Button size="lg" onClick={toggleAudio} bgColor="transparent">
        {isPlaying ? <Icon name="pause" /> : <Icon name="play" />}
      </Button>
    </Box>
  );
}
