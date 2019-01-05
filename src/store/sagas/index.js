import { all, takeLatest } from 'redux-saga/effects';

import { addFavoriteRequest } from './favorites';

export default function* rootSaga() {
  return yield all([takeLatest('favorites/ADD_REQUEST', addFavoriteRequest)]);
}
