import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactDto } from '../saga/userSaga';
import { Contact } from './contactSlice';

interface UserSliceState {
  id: string;
  name: string;
  avatarUrl: string;
  activeChats: Contact[];
  loading: boolean;
}

const initialState: UserSliceState = {
  id: localStorage.getItem('totvs_chat:user_id') || '',
  name: localStorage.getItem('totvs_chat:user_nome') || '',
  avatarUrl: localStorage.getItem('totvs_chat:user_avatar') || '',
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
      localStorage.setItem('totvs_chat:user_avatar', payload.avatarUrl);
      return { ...state, loading: false, name: payload.name, id: payload.id };
    },
    getActiveChatsRequest: (
      state,
      { payload }: PayloadAction<{ id: string }>
    ) => {
      return { ...state, loading: true };
    },
    getActiveChatsSuccess: (state, { payload }: PayloadAction<Contact[]>) => {
      return { ...state, loading: false, activeChats: payload };
    },
  },
});

export const {
  createUserRequest,
  createUserSuccess,
  getActiveChatsRequest,
  getActiveChatsSuccess,
} = userSlice.actions;

export const user = userSlice.reducer;
