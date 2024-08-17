import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import { productReducer } from './ProductsReducer';
// import { composeWithDevTools } from 'remote-redux-devtools';

const combinedReducers = combineReducers({
  PRODUCTS: productReducer,
});

const composeEnhancers = (process.env.REACT_APP_NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;
// const store = createStore(counterReducer,composeEnhancers());

// let composeEnhancers = composeWithDevTools({
//     realtime: true,
//     name: 'Your Instance Name',
//     hostname: 'localhost',
//     port: 8081, // the port your remotedev server is running at
//   });

export const storeing = createStore(combinedReducers, composeEnhancers());
