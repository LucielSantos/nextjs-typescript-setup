import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useStore } from '../store';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
