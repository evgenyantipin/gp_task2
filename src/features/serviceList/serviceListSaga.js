import { call, put, takeLatest } from 'redux-saga/effects';
import serviceApi from '../../api/serviceApi';
import { serviceListActions } from './serviceListSlice';

function* fetchServiceList() {
  try {
    const response = yield call(serviceApi.getAll);
    yield put(serviceListActions.fetchServiceListSuccess(response));
  } catch (error) {
    yield put(serviceListActions.fetchServiceListFailed(error));
  }
}

export default function* serviceListSaga() {
  yield takeLatest(serviceListActions.fetchServiceList.type, fetchServiceList);
}
