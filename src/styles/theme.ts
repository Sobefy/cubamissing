import { theme as chakraTheme } from "@chakra-ui/react";

const inter = `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`;
const poppins = "Poppins";
const karla = "Karla";

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    heading: poppins,
    body: karla,
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      // Blue
      blue: "#2350B2",
      darkBlue: "#1D4ED8",
      blueGrey: "#94A3B8",
      lightGray: "#f9f9f9",
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

        "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
    },
  },
};
export default theme;
