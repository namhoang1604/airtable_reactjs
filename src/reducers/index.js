import { combineReducers } from 'redux';
import models from './models';
import drawings from './drawings';
import services from './services';

export default () =>
  combineReducers({
    models,
    drawings,
    services,
  });
