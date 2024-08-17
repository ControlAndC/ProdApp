import { USER_UPDATE, USER_FETCH } from '../ActionCreator/AllActionTypes';

const user = { userId: '002', userName: 'santosh', userCity: 'Gaur city' };

const userProfileReducer = (state = user, action) => {
  if (action.type === USER_FETCH) {
    return state;
  }
  if (action.type === USER_UPDATE) {
    return { ...state, ...action.payload };
  }

  return state;
};
export default userProfileReducer;
