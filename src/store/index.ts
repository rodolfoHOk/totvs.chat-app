import { configureStore } from '@reduxjs/toolkit';
import createSaga from 'redux-saga';
import { appReducer } from './reducers';
import { rootSaga } from './saga';

const sagaMiddleware = createSaga();

export const store = configureStore({
  reducer: appReducer,
  devTools: true,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
