import type { AppProps } from "next/app";
import * as React from "react";
import type { NextPage } from "next";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "../config/store";
import { SWRConfig } from "swr";
import { request } from "../services/axios/axios";
import axiosClient from "../../api-client/axios-client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { theme, createEmotionCache } from "@/utils/index";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { emotionCache = clientSideEmotionCache } = pageProps;
  const getLayout = Component.getLayout ?? ((page) => page);
  const pages = getLayout(<Component {...pageProps} />);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
            {pages}
          </SWRConfig>
        </Provider>
        <CssBaseline />
      </ThemeProvider>
    </CacheProvider>
  );
}
