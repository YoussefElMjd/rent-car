import { extendTheme } from "@chakra-ui/react";
import COLORS from "../constant/colors";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#000000",
      },
      "body::-webkit-scrollbar": {
        width: "10px",
        height: "5px",
      },
      "body::-webkit-scrollbar-thumb": {
        background: COLORS.Secondary.value,
        borderRadius: "8px",
      },
      "body::-webkit-scrollbar-track": {
        background: "rgba(255,255,255,0.1)",
      },
      "body::-webkit-scrollbar-thumb:hover": {
        background: COLORS.Secondary.value,
        filter: "saturate(200%)",
      },
    }),
  },
});

export default theme;
