import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './store';
import { DefaultTheme } from './components/themes/default';
import { DarkTheme } from './components/themes/dark';
import { GlobalStyle } from './components/GlobalStyle';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Provider>
);
