import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: {
        primary: string;
        secondary: string;
        hover: string;
        pure: string;
        chat: string;
        green: string;
        author: string;
      };
      border: {
        primary: string;
        secondary: string;
        pure: string;
        chat: string;
      };
      scrollbar: {
        primary: string;
      };
      icon: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        gray: string;
        darkGray: string;
        invert: string;
      };
    };
  }
}
