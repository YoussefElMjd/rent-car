// pages/_app.js
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../../../packages/ui/pages/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://www.youtube.com/iframe_api"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
export async function getInitialProps(context: AppContext) {
  return await App.getInitialProps(context);
}

export default MyApp;
