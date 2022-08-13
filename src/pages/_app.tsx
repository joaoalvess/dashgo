import { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import Theme from '../theme';

import Fonts from '../fonts';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={Theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
