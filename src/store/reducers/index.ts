import { combineReducers } from 'redux';
import { contact } from './contactSlice';
import { user } from './userSlice';

export const appReducer = combineReducers({ contact, user });
