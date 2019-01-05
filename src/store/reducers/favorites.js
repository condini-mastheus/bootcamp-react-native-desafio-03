const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'favorites/ADD_SUCCESS':
      return [...state, action.payload.repository];
    default:
      return state;
  }
}
