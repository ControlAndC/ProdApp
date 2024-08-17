import { sum } from '../common';
import { logToServer } from '../logger';

jest.mock('../logger');

console.log(logToServer)

test('testing sum', () => {
  expect(sum(3, 4)).toEqual(7);
});
