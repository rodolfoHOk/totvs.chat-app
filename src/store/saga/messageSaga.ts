import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import {
  getMessagesSuccess,
  Message,
  sendMessageSuccess,
} from '../reducers/messageSlice';

export interface MessageDto {
  content: string;
  originId: string;
  destinationId: string;
}

export interface GetMessagesParams {
  userLoginId: string;
  userContactId: string;
}

export function* getMessages(action: PayloadAction<GetMessagesParams>) {
  try {
    const { userLoginId, userContactId } = action.payload;
    const response: AxiosResponse<Message[]> = yield call(
      api.get,
      `/messages/${userLoginId}/${userContactId}`
    );

    yield put(getMessagesSuccess(response.data));
  } catch (error) {
    console.log('Erro ao tentar buscar as mensagens -> ', error);
  }
}

export function* sendMessage({ payload }: PayloadAction<MessageDto>) {
  try {
    const response: AxiosResponse<Message> = yield call(
      api.post,
      '/messages',
      payload
    );

    yield put(sendMessageSuccess(response.data));
  } catch (error) {
    console.log('Erro ao tentar enviar a mensagem -> ', error);
  }
}
