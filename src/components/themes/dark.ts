import { DefaultTheme as SCDefaultTheme } from 'styled-components';

export const DarkTheme: SCDefaultTheme = {
  title: 'dark',
  colors: {
    background: {
      primary: '#1c2831',
      secondary: '#101d24',
      hover: '#222c32',
      pure: '#101d24',
      chat: '#0b131a',
      green: '#072e2c',
      author: '#073e3c',
    },
    border: {
      primary: '#222222',
      secondary: '#111111',
      pure: '#000000',
      chat: '#073e3c',
    },
    scrollbar: {
      primary: 'rgba(0, 0, 0, 0.2)',
    },
    icon: {
      primary: '#656f75',
      secondary: '#656f75',
      green: '#009688',
    },
    text: {
      primary: '#aeb7c0',
      gray: '#666666',
      darkGray: '#000000',
      invert: '#aeb7c0',
    },
  },
  background: {
    image:
      'https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/Desktop.png',
  },
};
