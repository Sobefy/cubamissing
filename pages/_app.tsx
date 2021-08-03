import { useEffect } from "react";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../src/styles/theme";
import * as ga from "../lib/ga";

import "@fontsource/poppins";
import "@fontsource/karla";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
