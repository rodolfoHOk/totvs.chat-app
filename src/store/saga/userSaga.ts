import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import { Contact } from '../reducers/contactSlice';
import { createUserSuccess } from '../reducers/userSlice';

export interface ContactDto {
  name: string;
}

export function* createUser(action: PayloadAction<ContactDto>) {
  try {
    const { payload } = action;

    const response: AxiosResponse<Contact, any> = yield call(
      api.post,
      '/contacts',
      payload
    );

    yield put(createUserSuccess(response.data));
  } catch (error) {
    console.log('Erro ao tentar criar usuário -> ', error);
  }
}
