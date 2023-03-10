import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout.component';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}
