import carReducers from './CarReducers/CarReducers';

export const fetchCarDetails = (payload) => ({
  type: 'car_fetch',
  payload,
});

export const setCarDetails = (payload) => ({
  type: 'car_put',
  payload,
});
