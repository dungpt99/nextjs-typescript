import type { AppProps } from "next/app";
import * as React from "react";
import type { NextPage } from "next";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "../config/store";
import { SWRConfig } from "swr";
import { request } from "../services/axios/axios";
import axiosClient from "../../api-client/axios-client";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const pages = getLayout(<Component {...pageProps} />);
  return (
    <Provider store={store}>
      <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
        {pages}
      </SWRConfig>
    </Provider>
  );
}
