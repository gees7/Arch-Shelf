import { GET_ORDERS } from '../types/orderTypes';

const initialState = {
  ordersList: [],
  loading: false,
  error: null,
};
export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        ordersList: action.payload.records,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
