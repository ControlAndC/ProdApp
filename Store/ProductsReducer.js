import { SET_PRODUCTS, DEL_PRODUCTS } from './Actions';

const initialData = {
  id: 1,
  name: 'colgate',
  category: 'toothpaste',
};

export const productReducer = (state = [initialData], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      console.log('payload1', action);
      return [...state, ...action.payload];

    case DEL_PRODUCTS:
      console.log('payload2', action);

    default:
      return state;
  }
};
