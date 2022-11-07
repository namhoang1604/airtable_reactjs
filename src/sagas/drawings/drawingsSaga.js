import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from '../../services/apiService';

function* getAllDrawings() {
  try {
    const { data } = yield call(apiService, {
      menthod: 'get',
      url: 'drawings',
    });

    yield put({ type: 'GET_ALL_DRAWINGS_SUCCESSFUL', data });
  } catch (error) {
    yield put({ type: 'GET_ALL_DRAWINGS_ERROR', error });
  }
}

export default function* sagas() {
  yield takeLatest('GET_ALL_DRAWINGS', getAllDrawings);
}
