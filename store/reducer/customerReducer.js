import { GET_ALL_CUSTOMERS_ADDRESSES } from '../types/checkoutTypes';

const initialState = {
  customerAddresses: [],
  loading: false,
  error: null,
};
export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CUSTOMERS_ADDRESSES:
      return {
        ...state,
        customerAddresses: action.payload,
      };
    default:
      return state;
  }
};
