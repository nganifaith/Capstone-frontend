import { SET_BEACH } from '../actions';

export default function BeachesListReducer(state = [], action) {
  switch (action.type) {
    case SET_BEACH:
      return action.payload;
    default:
      return state;
  }
}

export const getBeaches = (state) => state.beachList;
