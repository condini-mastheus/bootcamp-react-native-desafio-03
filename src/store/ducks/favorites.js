export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  errorOnAdd: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        isLoading: false,
        errorOnAdd: null,
        data: [...state.data, action.payload.repository],
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorOnAdd: action.payload.message,
      };
    default:
      return state;
  }
}

export const Creators = {
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: {
      repository,
    },
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_SUCCESS,
    payload: {
      repository,
    },
  }),

  addFavoriteFailure: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
