import { combineReducers } from 'redux';
import listWorkerReducer from './listWorker';

const rootReducers = combineReducers({
  listWorker: listWorkerReducer,
});

export default rootReducers;
