import { Alert } from 'react-native/types';
import { SHOPPING_CART_ADD, SHOPPING_CART_REMOVE } from '../ActionCreator/AllActionTypes';

const shopping = [{
  itemName: 'cookingOil',
  itemId: '001',
  ItemType: 'oil',
}];
const ShoppingReducer = (state = shopping, action) => {
  console.log('action here in shopping reducer', action);
  console.log('action here in shopping reducer2', state);

  if (action.type === SHOPPING_CART_ADD) {
    return ([...state, action.payload]);
  }

  if (action.type === SHOPPING_CART_REMOVE) {
    const shoppingData = [...state];
    const newArray = [];
    shoppingData.map((item) => {
      if (item.id !== action.payload.id) {
        newArray.push(item);
      }
    });
    return newArray;
  }

  return (state);
};
export default ShoppingReducer;
