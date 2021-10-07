import { SET_BEACH_DETAILS } from '../actions';

export default function BeachDetailstReducer(state = {}, action) {
  switch (action.type) {
    case SET_BEACH_DETAILS:
      return action.payload;
    default:
      return state;
  }
}

export const getDetails = (state) => state.beachDetails;
