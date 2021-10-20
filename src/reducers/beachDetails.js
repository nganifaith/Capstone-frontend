import { SET_BEACH_DETAILS } from '../actions';
import { baseUrl } from '../Api/client';

export default function BeachDetailstReducer(state = {}, action) {
  switch (action.type) {
    case SET_BEACH_DETAILS:
      return action.payload;
    default:
      return state;
  }
}

export const getDetails = (state) => state.beachDetails;
export const getImage = ({ featured_image: featuredImage }) => (`${featuredImage}`.startsWith('http') ? featuredImage : `${baseUrl}${featuredImage}`);
