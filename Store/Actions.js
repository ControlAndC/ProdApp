export const SET_PRODUCTS = '_setProducts';
export const DEL_PRODUCTS = '_delProduct';

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload,
});

export const deleteProduct = (payload) => ({
  type: DEL_PRODUCTS,
  payload,
});
