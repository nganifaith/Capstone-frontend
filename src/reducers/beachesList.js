import { SET_BEACH, SET_SEARCH_TERM } from '../actions';

export default function BeachesListReducer(state = { beaches: [], searchTerm: '' }, action) {
  switch (action.type) {
    case SET_BEACH:
      return { ...state, beaches: action.payload };
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

export const getBeaches = (state) => state.beachList.beaches;
export const getSearchTerm = (state) => state.beachList.searchTerm;
