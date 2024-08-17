import { combineReducers } from 'redux';
import carReducers from './CarReducers/CarReducers';
import productReducers from '../Redux2/ProductsReducer';

const combineReducers_ = combineReducers({
  CAR: carReducers,
  PRODUCT: productReducers,
});

export default combineReducers_;
