import { setPlanet } from './ActionConstant';

export const planet = async (dispatch) => {
  console.log('hello ji');
  const data = await fetch('https://dummyjson.com/products');
  const res = await data.json();
  console.log('hey data-->', res);
  dispatch({
    type: setPlanet,
    payload: res.products.map((item, index) => ({
      ...item,
      isSelected: false,
    })),
  });
};
