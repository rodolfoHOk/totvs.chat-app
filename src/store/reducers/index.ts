import { combineReducers } from 'redux';
import { contact } from './contactSlice';
import { user } from './userSlice';
import { message } from './messageSlice';

export const appReducer = combineReducers({ contact, user, message });
