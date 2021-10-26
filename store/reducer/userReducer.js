import { SET_USER_DETAILS_INFO } from '../types/userTypes';

const initialState = {
  userInfo: null,
  loading: false,
  error: null,
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS_INFO:
      return {
        ...state,
        userInfo: action.payload,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};
