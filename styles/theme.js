import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"InterVariable", sans-serif`,
    body: `"InterVariable", sans-serif`,
  },
  textStyles: {
    content: {
      lineHeight: "180%",
    },
  },
  semanticTokens: {
    colors: {
      accent: {
        default: "teal.500",
      },
    },
  },
});

export default theme;
