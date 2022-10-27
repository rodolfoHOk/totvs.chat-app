import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactDto } from '../saga/userSaga';
import { Contact } from './contactSlice';

interface UserSliceState {
  id: string;
  name: string;
  activeChats: any[];
  loading: boolean;
}

const initialState: UserSliceState = {
  id: localStorage.getItem('totvs_chat:user_id') || '',
  name: localStorage.getItem('totvs_chat:user_nome') || '',
  activeChats: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserRequest: (state, action: PayloadAction<ContactDto>) => {
      return { ...state, loading: true };
    },
    createUserSuccess: (state, { payload }: PayloadAction<Contact>) => {
      localStorage.setItem('totvs_chat:user_id', payload.id);
      localStorage.setItem('totvs_chat:user_nome', payload.name);
      return { ...state, loading: false, name: payload.name, id: payload.id };
    },
  },
});

export const { createUserRequest, createUserSuccess } = userSlice.actions;

export const user = userSlice.reducer;
