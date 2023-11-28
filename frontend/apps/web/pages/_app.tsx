// pages/_app.js
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import theme from "../../../packages/ui/pages/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
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
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
          />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
export async function getInitialProps(context: AppContext) {
  return await App.getInitialProps(context);
}

export default MyApp;
