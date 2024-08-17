import {
  combineReducers, applyMiddleware, compose, createStore,
} from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PlanetReducers } from './PlanetReducers';

const combinedReducers = combineReducers({
  PLANET: PlanetReducers,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default PlanetStorek = createStore(
  combinedReducers,
  composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ),
);
