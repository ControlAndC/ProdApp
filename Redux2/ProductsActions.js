export const fetchProduct = (payload) => ({
  type: 'getProducts',
  payload,
});

export const deleteProduct = (payload) => ({
  type: 'deleteProducts',
  payload,
});
