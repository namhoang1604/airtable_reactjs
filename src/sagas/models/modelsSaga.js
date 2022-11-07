import { call, put, takeLatest } from 'redux-saga/effects';
import apiService from '../../services/apiService';

function* getAllModels({ parentNumbers }) {
  try {
    const params = { parentNumbers };
    const { data } = yield call(apiService, {
      menthod: 'get',
      url: 'models',
      option: { params },
    });

    yield put({ type: 'GET_ALL_MODELS_SUCCESSFUL', data });
  } catch (error) {
    yield put({ type: 'GET_ALL_MODELS_ERROR', error });
  }
}

function* getAllModelsByModelModel({ modelModelIds }) {
  try {
    const params = { modelModelIds };
    const { data } = yield call(apiService, {
      menthod: 'get',
      url: 'models/get_by_model_model_ids',
      option: { params },
    });

    yield put({ type: 'GET_ALL_MODELS_SUCCESSFUL', data });
  } catch (error) {
    yield put({ type: 'GET_ALL_MODELS_ERROR', error });
  }
}

export default function* sagas() {
  yield takeLatest('GET_ALL_MODELS', getAllModels);
  yield takeLatest('GET_ALL_MODELS_BY_MODEL_MODEL', getAllModelsByModelModel);
}
