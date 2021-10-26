import {
  updateCustomerPhoneNumber,
  updateCustomerEmailaddress,
  getUserInfo,
  removeAddress,
  updateAddress,
  updateUserName,
} from '../api/userApi';
import { SET_USER_DETAILS_INFO } from '../types/userTypes';
import { getMeApiAction } from './authActions';

export const updateCustomerPhone = (data, cb) => async () => {
  const res = await updateCustomerPhoneNumber(data).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const updateCustomerEmail = (data, cb) => async () => {
  const res = await updateCustomerEmailaddress(data).catch(() => {
    if (cb) cb(res);
  });
  if (cb) cb(res);
};

export const userDetailedInfo = (data, cb) => async (dispatch) => {
  const res = await getUserInfo(data).catch((err) => {
    if (cb) cb(err);
  });
  dispatch({
    type: SET_USER_DETAILS_INFO,
    payload: res,
  });
  if (cb) cb(res);
};

export const removeCustomerAddress = (paylaod, cb) => async (dispatch) => {
  const res = await removeAddress(paylaod).catch((err) => {
    if (cb) cb();
  });
  if (cb) cb(res);
};

export const updateCustomerAddress = (paylaod, cb) => async (dispatch) => {
  const res = await updateAddress(paylaod).catch((err) => {
    if (cb) cb();
  });
  if (cb) cb(res);
};

export const updateName = (payload, cb) => async (dispatch) => {
  const res = await updateUserName(payload).catch((err) => {
    if (cb) cb();
  });
  await dispatch(getMeApiAction());
  if (cb) cb(res);
};
