import serviceListSaga from '../features/serviceList/serviceListSaga';
import serviceSaga from '../features/service/serviceSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([serviceListSaga(), serviceSaga()]);
}
