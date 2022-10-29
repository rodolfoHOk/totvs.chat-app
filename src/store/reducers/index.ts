import { combineReducers } from 'redux';
import { contact } from './contactSlice';
import { user } from './userSlice';
import { message } from './messageSlice';
import { theme } from './themeSlice';

export const appReducer = combineReducers({ contact, user, message, theme });
