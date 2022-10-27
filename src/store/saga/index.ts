import { all, takeLatest } from 'redux-saga/effects';
import { getContactsRequest } from '../reducers/contactSlice';
import {
  getMessagesRequest,
  sendMessageRequest,
} from '../reducers/messageSlice';
import {
  createUserRequest,
  getActiveChatsRequest,
} from '../reducers/userSlice';
import { getContacts } from './contactSaga';
import { getMessages, sendMessage } from './messageSaga';
import { createUser, getActiveChats } from './userSaga';

export function* rootSaga() {
  yield all([
    takeLatest(getContactsRequest, getContacts),
    takeLatest(createUserRequest, createUser),
    takeLatest(getActiveChatsRequest, getActiveChats),
    takeLatest(getMessagesRequest, getMessages),
    takeLatest(sendMessageRequest, sendMessage),
  ]);
}
