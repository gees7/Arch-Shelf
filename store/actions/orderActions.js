import { getOrdersList } from '../api/orderApi';
import { GET_ORDERS } from '../types/orderTypes';

export const getOrders = (payload) => async (dispatch) => {
  const res = await getOrdersList(payload);
  if (res) {
    dispatch({
      type: GET_ORDERS,
      payload: res,
    });
  }
};
