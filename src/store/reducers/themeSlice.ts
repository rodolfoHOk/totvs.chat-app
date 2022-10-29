import { createSlice } from '@reduxjs/toolkit';

interface ThemeSliceState {
  theme: 'light' | 'dark';
}

const initialState = {
  theme: localStorage.getItem('totvs_chat:theme') || 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === 'light') {
        localStorage.setItem('totvs_chat:theme', 'dark');
        return { ...state, theme: 'dark' };
      } else {
        localStorage.setItem('totvs_chat:theme', 'light');
        return { ...state, theme: 'light' };
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const theme = themeSlice.reducer;
