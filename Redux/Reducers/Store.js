import { createStore } from 'redux';
import combinedReducer from './Index';

const store = createStore(combinedReducer);
export default store;
