import { combineReducers } from 'redux';
import BeachDetailstReducer from './beachDetails';
import BeachesListReducer from './beachesList';
import currentUser from './currentUser';
import RandomUsersListReducer from './randomUsers';

const rootReducer = combineReducers({
  beachList: BeachesListReducer,
  beachDetails: BeachDetailstReducer,
  randomUsers: RandomUsersListReducer,
  currentUser,
});

export default rootReducer;
