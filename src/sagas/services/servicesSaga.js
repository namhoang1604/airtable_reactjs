import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from '../../services/apiService';

function* getAllServices() {
  try {
    const { data } = yield call(apiService, {
      menthod: 'get',
      url: 'services',
    });

    yield put({ type: 'GET_ALL_SERVICES_SUCCESSFUL', data });
  } catch (error) {
    yield put({ type: 'GET_ALL_SERVICES_ERROR', error });
  }
}

export default function* sagas() {
  yield takeLatest('GET_ALL_SERVICES', getAllServices);
}
