import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global-style';
import GlobalLayout from '../components/GlobalLayout';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>6th DoubleNC</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
