import { all, fork } from 'redux-saga/effects';
import services from './services/servicesSaga';
import drawings from './drawings/drawingsSaga';
import models from './models/modelsSaga';

export default function* root() {
  yield all([fork(models), fork(drawings), fork(services)]);
}
