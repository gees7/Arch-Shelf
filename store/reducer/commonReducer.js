import * as types from '../types';

const initialState = {
  countriesList: [],
  loading: false,
  error: null,
};
export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.common.SET_ALL_COUNTRIES_LIST:
      return {
        ...state,
        countriesList: action.payload,
        error: null,
        loading: false,
      };

    default:
      return state;
  }
};
