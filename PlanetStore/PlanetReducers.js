import { setPlanet } from './ActionConstant';

const initialState = {
  planet: [
    'sun',
    'moon',
    'saturn',
    'uranus',
    'neptune',
    'sun',
    'moon',
    'saturn',
    'uranus',
    'neptune',
    'sun',
    'moon',
    'saturn',
    'uranus',
    'neptune',
  ],
};

const name = 'santosh';
let age = 21;

if (name === 'santosh') {
  age = 22;
}

const PlanetReducers = (action, state = initialState) => {
  if (action.type === setPlanet) {
    console.log(age);
    return [...action.payload];
  }
  return state;
};

export default PlanetReducers;
