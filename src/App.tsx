import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Chat } from './components/templates/Chat';
import { Contacts } from './components/templates/Contacts';
import { ContainerMain } from './components/templates/ContainerMain';

import { DefaultTheme } from './components/themes/default';
import { DarkTheme } from './components/themes/dark';
import { GlobalStyle } from './components/GlobalStyle';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export const App: FC = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? DefaultTheme : DarkTheme}>
      <GlobalStyle />
      <ContainerMain>
        <Contacts />
        <Chat />
      </ContainerMain>
    </ThemeProvider>
  );
};
