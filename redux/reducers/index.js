import { combineReducers } from 'redux';
import listWorkerReducer from './listWorker';
import listRecruiterReducer from './listRecruiter';
import detailUserReducer from './detailUser';
import listUserChatReducer from './listUserChat';
import detailReceiverReducer from './detailReceiver';

const rootReducers = combineReducers({
  listWorker: listWorkerReducer,
  listRecruiter: listRecruiterReducer,
  detailUser: detailUserReducer,
  listUserChat: listUserChatReducer,
  detailReceiver: detailReceiverReducer,
});

export default rootReducers;
