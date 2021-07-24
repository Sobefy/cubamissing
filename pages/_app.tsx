import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/styles/theme";

import "@fontsource/poppins"
import "@fontsource/karla"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </ChakraProvider>
  );
}
export default MyApp;
