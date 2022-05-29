import { combineReducers } from 'redux';
import listWorkerReducer from './listWorker';
import listRecruiterReducer from './listRecruiter';

const rootReducers = combineReducers({
  listWorker: listWorkerReducer,
  listRecruiter: listRecruiterReducer,
});

export default rootReducers;
