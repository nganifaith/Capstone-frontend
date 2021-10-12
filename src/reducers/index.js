import { combineReducers } from 'redux';
import BeachDetailstReducer from './beachDetails';
import BeachesListReducer from './beachesList';
import RandomUsersListReducer from './randomUsers';

const rootReducer = combineReducers({
  beachList: BeachesListReducer,
  beachDetails: BeachDetailstReducer,
  randomUsers: RandomUsersListReducer,
});

export default rootReducer;
