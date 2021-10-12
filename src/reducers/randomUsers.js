import { SET_USER_DATA } from '../actions';

export default function RandomUsersListReducer(state = [], action) {
  switch (action.type) {
    case SET_USER_DATA:
      return action.payload;
    default:
      return state;
  }
}

export const getUsers = (state) => state.randomUsers;
