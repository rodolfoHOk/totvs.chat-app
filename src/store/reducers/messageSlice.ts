import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetMessagesParams, MessageDto } from '../saga/messageSaga';
import { Contact } from './contactSlice';

export interface Message {
  id: string;
  content: string;
  origin: Contact;
  destination: Contact;
  createdAt: Date;
  updatedAt: Date;
}

interface MessageSliceState {
  data: Message[];
  loading: boolean;
}

const initialState: MessageSliceState = {
  data: [],
  loading: false,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    getMessagesRequest: (state, action: PayloadAction<GetMessagesParams>) => {
      return { ...state, loading: true };
    },
    getMessagesSuccess: (state, { payload }: PayloadAction<Message[]>) => {
      return { ...state, loading: false, data: payload };
    },
    sendMessageRequest: (state, action: PayloadAction<MessageDto>) => {
      return { ...state, loading: true };
    },
    sendMessageSuccess: (state, action: PayloadAction<Message>) => {
      return { ...state, loading: false };
    },
  },
});

export const {
  getMessagesRequest,
  getMessagesSuccess,
  sendMessageRequest,
  sendMessageSuccess,
} = messageSlice.actions;

export const message = messageSlice.reducer;
