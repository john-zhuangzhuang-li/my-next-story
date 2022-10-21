import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  semanticTokens: {
    colors: {
      accent: {
        default: "teal.500",
      },
    },
  },
});

export default theme;
