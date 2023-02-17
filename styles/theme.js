import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"InterVariable", sans-serif`,
    body: `"InterVariable", sans-serif`,
    mono: `"RobotoMonoVariable", monospace`,
  },
  textStyles: {
    content: {
      lineHeight: "170%",
    },
    code: {
      lineHeight: "100%",
      fontFamily: `"RobotoMonoVariable", monospace`,
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
