import { SHOPPING_CART_ADD, SHOPPING_CART_REMOVE } from './AllActionTypes';

export const ShoppingActionAddToCart = (payload) => {
  console.log('payload shopping', payload);
  return {
    type: SHOPPING_CART_ADD,
    payload,
  };
};

export const ShoppingActionRemoveFromCart = (payload) => ({
  type: SHOPPING_CART_REMOVE,
  payload,
});
