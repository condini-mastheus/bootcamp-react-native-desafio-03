import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { addFavoriteSuccess } from '~/store/actions/favorites';

export function* addFavoriteRequest(action) {
  const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

  yield put(addFavoriteSuccess(data));
}
