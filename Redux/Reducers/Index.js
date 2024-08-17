import { combineReducers } from 'redux';
import ShoppingReducer from './ShoppingCartReducer';
import userProfileReducer from './UserProfileReducers';

const combinedReducer = combineReducers({
  Shopping: ShoppingReducer,
  User: userProfileReducer,
});
export default combinedReducer;
