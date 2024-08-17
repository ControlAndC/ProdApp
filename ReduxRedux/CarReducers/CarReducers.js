const car = { carName: 'swift', carBrand: 'maruti' };
const carReducers = (state = car, action) => {
  if (action.type === 'car_fetch') {
    return state;
  }
  if (action.type === 'car_put') {
    console.log('helo', action.payload);
    return { ...state, ...action.payload };
  }

  return state;
};

export default carReducers;
