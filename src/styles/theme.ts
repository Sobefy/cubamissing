import { theme as chakraTheme } from "@chakra-ui/react";

const inter = `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    heading: inter,
    body: inter,
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      // Blue
      blue: "#2350B2",
      darkBlue: "#1D4ED8",
      blueGrey: "#94A3B8",
    },
  },
};
export default theme;
