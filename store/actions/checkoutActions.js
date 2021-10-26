import { notification } from 'antd';
import * as types from '../types';
import {
  addItemToCart,
  getCartItems,
  addPhoneToCheckOutApi,
  addEmailToCheckOutApi,
  createCheckOut,
  addShippingAddressApi,
  initializeStripePaymentIntentApi,
  deleteItemFromCart,
  createCart,
  createCustomerEmailAddressApi,
  createCustomerPhoneNumberApi,
  createCustomerShippingAddressApi,
  getcustomerAddressesApi,
  refreshCartItems,
} from '../api/checkoutApi';
import { getAccessTokenAction, cookies } from './authActions';
import { successAction, requestAction } from './actionUtils';
import {
  ADD_SHIPPING_ADDRESS,
  INIT_WIRE_TRANSFER,
  ADD_ITEM_TO_CART,
} from '../types/checkoutTypes';

/**
 *
 * @param {import("redux").Dispatch} dispatch
 */

// add item to cart
export const addItemToCartAction = (data, checkOutId, cb) => async (
  dispatch
) => {
  dispatch({ type: requestAction(ADD_ITEM_TO_CART) });
  let res = {};
  if (!checkOutId) {
    res = await createCart(data);
    dispatch({
      type: types.checkout.CART_ITEM_COUNT,
      payload: true,
    });
  } else {
    res = await addItemToCart(data, checkOutId);
    dispatch({
      type: types.checkout.CART_ITEM_COUNT,
      payload: true,
    });
  }
  dispatch({
    type: types.checkout.ADD_ITEM_TO_CART,
    payload: res,
  });
  if (cb) cb(res);
  dispatch({ type: successAction(ADD_ITEM_TO_CART) });
};

export const deleteItemFromCartAction = (data, cb) => async (dispatch) => {
  const res = await deleteItemFromCart(data);

  if (cb) cb(res);
};

export const getCartItemsAction = (data, cb) => async (dispatch) => {
  if (data.customerId) {
    // call the refresh cart api first, to remove products that are out of stock
    const refreshCartResponse = await refreshCartItems({
      cartId: data.cartId,
      customerId: data.customerId,
    });

    dispatch({
      type: types.checkout.SET_REOVED_CART_ITEMS,
      payload: refreshCartResponse.removedItems,
    });
  }
  // remve this dispatch when refresh token issue resolved

  const res = await getCartItems(data);

  dispatch({
    type: types.checkout.GET_CART_ITEMS,
    payload: res,
  });
  if (cb) cb(res);
};

export const createCheckOutAction = (data, cb) => async (dispatch) => {
  await createCheckOut(data)
    .then((res) => {
      dispatch({
        type: types.checkout.CREATE_CHECK_OUT,
        payload: res,
      });
      if (cb) cb(res);
    })
    .catch((error) => {
      notification.error({
        message: 'Create order page',
      });
    });
};
export const initializeStripePaymentIntentAction = (data, cb) => async (
  dispatch
) => {
  await initializeStripePaymentIntentApi(data)
    .then((res) => {
      // dispatch({
      //   type: types.checkout.CREATE_CHECK_OUT,
      //   payload: res,
      // });
      if (cb) cb(res);
    })
    .catch((error) => {
      notification.error({
        message: 'create stripe fail',
      });
    });
};
export const addShippingAddressAction = (data, cb) => async (dispatch) => {
  dispatch({
    type: requestAction(ADD_SHIPPING_ADDRESS),
  });
  const res = await addShippingAddressApi(data);
  dispatch({
    type: ADD_SHIPPING_ADDRESS,
    payload: res,
  });
  if (cb) cb(res);
  dispatch({
    type: successAction(ADD_SHIPPING_ADDRESS),
  });
};
export const addEmailToChecOutAction = (data, cb) => async (dispatch) => {
  const res = await addEmailToCheckOutApi(data);
  dispatch({
    type: types.checkout.ADD_SHIPPING_ADDRESS,
    payload: res,
  });
  if (cb) cb(res);
};
export const addPhoneToChecOutAction = (data, cb) => async (dispatch) => {
  const res = await addPhoneToCheckOutApi(data);
  dispatch({
    type: types.checkout.ADD_PHONE_TO_CHECKOUT,
    payload: res,
  });
  if (cb) cb(res);
};
export const createCustomerAddressAction = (data, cb) => async (dispatch) => {
  const res = await createCustomerShippingAddressApi(data);

  if (cb) cb(res);
};
export const createCustomerEmailAction = (data, cb) => async (dispatch) => {
  const res = await createCustomerEmailAddressApi(data);

  if (cb) cb(res);
};
export const createCustomerPhoneNumberAction = (data, cb) => async (
  dispatch
) => {
  const res = await createCustomerPhoneNumberApi(data);

  if (cb) cb(res);
};
export const getcustomerAddressesAction = (data, cb) => async (dispatch) => {
  const res = await getcustomerAddressesApi(data);
  dispatch({
    type: types.checkout.GET_ALL_CUSTOMERS_ADDRESSES,
    payload: res,
  });
  if (cb) cb(res);
};

// Wire Transfer Action Creator
// Redux thunk enables action creators to return a function instead of action object
export const initializeWireTransferActionCreator = (data, cb) => async (
  dispatch
) => {
  dispatch({ type: requestAction(INIT_WIRE_TRANSFER) });
  const res = await createCheckOut(data);
  dispatch({
    type: types.checkout.INIT_WIRE_TRANSFER,
    payload: {
      ...res,
      ...data.payload,
    },
  });

  if (cb) cb(res);
  dispatch({
    type: successAction(INIT_WIRE_TRANSFER),
  });
};
