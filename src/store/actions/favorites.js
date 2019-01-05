export const addFavoriteRequest = repository => ({
  type: 'favorites/ADD_REQUEST',
  payload: {
    repository,
  },
});

export const addFavoriteSuccess = repository => ({
  type: 'favorites/ADD_SUCCESS',
  payload: {
    repository,
  },
});
