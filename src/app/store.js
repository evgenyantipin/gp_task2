import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import serviceListReducer from '../features/serviceList/serviceListSlice';
import serviceReducer from '../features/service/serviceSlice';
import rootSaga from './rootSaga';

const loggerMiddleware = createLogger({
  collapsed: false,
});

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  serviceList: serviceListReducer,
  service: serviceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware, routerMiddleware(history), loggerMiddleware),
});

sagaMiddleware.run(rootSaga);
