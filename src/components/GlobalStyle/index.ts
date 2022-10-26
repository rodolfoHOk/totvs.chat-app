import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.pure};
    margin: 0;
    padding: 0;
    font-family: 'Sagoe UI',  Helvetica, Arial, sans-serif;
  }

  svg.MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.icon.primary}
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  :root{
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    scrollbar-width: auto;
  }

`;
