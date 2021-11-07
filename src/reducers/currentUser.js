import {
  getToken, LOGIN, LOGOUT, SET_TOKEN,
} from '../actions/currentUser';

export default function currentUser(state = { token: getToken() }, action) {
  switch (action.type) {
    case LOGOUT:
      return {};
    case LOGIN:
      return { ...state, user: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
