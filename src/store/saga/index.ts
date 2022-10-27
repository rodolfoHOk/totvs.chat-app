import { all, takeLatest } from 'redux-saga/effects';
import { getContactsRequest } from '../reducers/contactSlice';
import { createUserRequest } from '../reducers/userSlice';
import { getContacts } from './contactSaga';
import { createUser } from './userSaga';

export function* rootSaga() {
  yield all([
    takeLatest(getContactsRequest, getContacts),
    takeLatest(createUserRequest, createUser),
  ]);
}
