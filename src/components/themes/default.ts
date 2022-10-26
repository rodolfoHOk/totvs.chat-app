import { DefaultTheme as SCDefaultTheme } from 'styled-components';

export const DefaultTheme: SCDefaultTheme = {
  title: 'default',
  colors: {
    background: {
      primary: '#d2dbdc',
      secondary: '#ededed',
      hover: '#f5f5f5',
      pure: '#ffffff',
      chat: '#f8f9fa',
      green: '#00bfa5',
      author: '#dcf8c6',
    },
    border: {
      primary: '#dddddd',
      secondary: '#eeeeee',
      pure: '#ffffff',
      chat: '#4adf83',
    },
    scrollbar: {
      primary: 'rgba(0, 0, 0, 0.2)',
    },
    icon: {
      primary: '#919191',
      secondary: '#ffffff',
    },
    text: {
      primary: '#000000',
      gray: '#999999',
      darkGray: '#4a4a4a',
      invert: '#ffffff',
    },
  },
};
