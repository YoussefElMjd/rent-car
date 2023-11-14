import { Stack } from "@chakra-ui/react";
import IRevealProps from "./props";
import React, { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import COLORS from "../../../constant/colors";

export default function Reveal(props: IRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const mainController = useAnimation();
  const secondController = useAnimation();

  useEffect(() => {
    if (inView) {
      mainController.start("visible");
      secondController.start("visible");
    }
  }, [inView]);
  return (
    <Stack position={"relative"} overflow={"hidden"} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        initial="hidden"
        animate={mainController}
      >
        {props.children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={secondController}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: COLORS.Secondary.value,
          zIndex: 20,
        }}
      ></motion.div>
    </Stack>
  );
}
