import '../styles/globals.css'

import type { AppProps as NextAppProps } from "next/app";
import { ThemeProvider } from 'styled-components'
import themes from '../themes';

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes[pageProps.theme] || themes['default-dark']}>
      <Component {...pageProps} />
    </ThemeProvider> 
  ) 
}

export default MyApp
