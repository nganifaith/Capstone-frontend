import { combineReducers } from 'redux';
import BeachDetailstReducer from './beachDetails';
import BeachesListReducer from './beachesList';

const rootReducer = combineReducers({
  beachList: BeachesListReducer,
  beachDetails: BeachDetailstReducer,
});

export default rootReducer;
