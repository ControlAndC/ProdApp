import { USER_FETCH, USER_UPDATE } from './AllActionTypes';

export const UserActionGet = (payload) => ({
  type: USER_FETCH,
  payload,
});

export const UserActionUpdate = (payload) => {
  console.log('payload', payload);
  return {
    type: USER_UPDATE,
    payload,
  };
};
