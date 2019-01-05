import { call, put, select } from 'redux-saga/effects';
import api from '~/services/api';

import { Creators as FavoriteActions } from '~/store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === data.id)) {
      yield put(FavoriteActions.addFavoriteFailure('Repositório duplicado'));
    } else {
      yield put(FavoriteActions.addFavoriteSuccess(data));
    }
  } catch (error) {
    yield put(FavoriteActions.addFavoriteFailure('Repositório não existe'));
  }
}
