import { theme as chakraTheme } from "@chakra-ui/react";

const inter = `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;
const raleway = "Poppins";
const openSans = "Open Sans";

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    heading: raleway,
    body: openSans,
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      // Blue
      blue: "#2350B2",
      darkBlue: "#1D4ED8",
      blueGrey: "#94A3B8",
      oceanBlue: "#0F172A",
      bgWhite: "#fff",
      // Grey
      greyBlue: "#9CA3AF",
    },
  },
  shadows: {
    ...chakraTheme.shadows,
    brand: {
      // White
      whiteShadow:
        "0px 2px 4px rgb(148 163 184 / 5%), 0px 6px 24px rgb(235 238 251 / 40%)",
    },
  },
};
export default theme;
