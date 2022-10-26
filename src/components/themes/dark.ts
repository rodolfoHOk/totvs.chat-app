import { DefaultTheme as SCDefaultTheme } from 'styled-components';

export const DarkTheme: SCDefaultTheme = {
  title: 'dark',
  colors: {
    background: {
      primary: '#2d2423',
      secondary: '#121212',
      hover: '#0a0a0a',
      pure: '#000000',
      chat: '#070605',
      green: '#00bfa5',
      author: '#dcf8c6',
    },
    border: {
      primary: '#222222',
      secondary: '#111111',
      pure: '#000000',
      chat: '#4adf83',
    },
    scrollbar: {
      primary: 'rgba(0, 0, 0, 0.2)',
    },
    icon: {
      primary: '#6e6e6e',
      secondary: '#000000',
    },
    text: {
      primary: '#ffffff',
      gray: '#666666',
      darkGray: '#b5b5b5',
      invert: '#000000',
    },
  },
};
