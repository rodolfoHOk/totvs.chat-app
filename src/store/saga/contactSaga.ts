import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';
import { api } from '../../services/api';
import { Contact, getContactsSuccess } from '../reducers/contactSlice';

export function* getContacts() {
  try {
    const response: AxiosResponse<Contact[], any> = yield call(
      api.get,
      '/contacts'
    );

    yield put(getContactsSuccess(response.data));
  } catch (error) {
    console.log('Erro ao tentar buscar os contatos -> ', error);
  }
}
