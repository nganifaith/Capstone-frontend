import { combineReducers } from 'redux';
import BeachesListReducer from './beachesList';

const rootReducer = combineReducers({
  beachList: BeachesListReducer,
});

export default rootReducer;
