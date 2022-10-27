import { createSlice } from '@reduxjs/toolkit';

export interface Contact {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ContactSliceState {
  data: Contact[];
  activeContact: Contact | null;
  loading: boolean;
}

const initialState: ContactSliceState = {
  data: [],
  activeContact: null,
  loading: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getContactsRequest: (state) => {
      return { ...state, loading: true };
    },
    getContactsSuccess: (state, action) => {
      return { ...state, loading: false, data: action.payload };
    },
    setActiveChatRequest: (state, action) => {
      return { ...state, activeContact: action.payload };
    },
  },
});

export const { getContactsRequest, getContactsSuccess, setActiveChatRequest } =
  contactSlice.actions;

export const contact = contactSlice.reducer;
