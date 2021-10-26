import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { notification } from 'antd';
import {
  registerUserApi,
  getAccessTokenApi,
  loginUserApi,
  sentOtpApi,
  verifyOtpApi,
  kycDocumentsApi,
  getMeApi,
  refreshToken,
  resetPassword,
  forgetPassword,
  updatePassword,
  fetchUserAttachmentApi,
  ContactUsForm,
  contactUsFormAction,
  getQuoteSubmit,
  addToCartSubmit,
  addToPrevCartSubmit,
  removeItemFromCartService,
  createQuoteFromCartSubmit,
} from '../api/authApi';
import * as types from '../types';
import {
  GET_ACCESS_TOKEN,
  SET_CURRENT_USER,
  IS_LOGIN,
  LOGIN_USER,
  SET_USER_ROLE,
  AUTH_LOADING,
  FILLED_FORM,
} from '../types/userTypes';
import { successAction, requestAction } from './actionUtils';
import Axios from 'axios';
import { hostname } from '../../apiUtils';

// register user api
/**
 * @param {import("redux").Dispatch} dispatch
 */

export const cookies = new Cookies();

// const filledForm = useSelector((state) => state.auth.filledForm);

export const logoutUserAction = () => async (dispatch) => {
  await cookies.remove('refreshToken', { path: '/' });
  await cookies.remove('accessToken', { path: '/' });
  await cookies.remove('filledForm', { path: '/' });

  await dispatch({
    type: FILLED_FORM,
    payload: null,
  });
  await dispatch({
    type: SET_CURRENT_USER,
    payload: null,
  });
  dispatch({
    type: IS_LOGIN,
    payload: false,
  });

  Router.replace('/');
};

// me api action
export const getMeApiAction = (data, cb) => async (dispatch) => {
  dispatch({ type: requestAction(SET_CURRENT_USER) });
  await getMeApi(data)
    .then((res) => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: res,
      });
      dispatch({
        type: SET_USER_ROLE,
        payload:
          res?.personal_details?.organization_details?.classification_grp_id ||
          'GUEST_USER',
      });
      if (res && res?.personal_details?.id) {
        dispatch({
          type: IS_LOGIN,
          payload: true,
        });
      }

      if (cb) cb(res);
    })
    .catch(() => {
      dispatch({
        type: SET_CURRENT_USER,
        payload: null,
      });
      dispatch({
        type: AUTH_LOADING,
        payload: false,
      });
      if (cb) cb();
    });
  dispatch({ type: successAction(SET_CURRENT_USER) });
};

export const loginUserAction = (data, cb) => async (dispatch) => {
  cookies.remove('refreshToken', { path: '/' });
  cookies.remove('accessToken', { path: '/' });
  await loginUserApi(data)
    .then(async (res) => {
      if (res?.data?.userLoginObject?.enabled === 'N') {
        if (cb) cb({ disabled: true });
        return;
      }
      if (res?.data?.accessToken) {
        await cookies.set('accessToken', res.data.accessToken, { path: '/' });
        await cookies.set('refreshToken', res.data.accessToken, { path: '/' });
        dispatch({
          type: GET_ACCESS_TOKEN,
          payload: res,
        });
        // Router.push('/');
      }
      dispatch({
        type: LOGIN_USER,
        payload: res?.data,
      });
      if (cb) cb(res?.data);
      // TODO: Setup primary phone info for phone number
      if (res?.data?.accessToken) {
        dispatch(
          getMeApiAction('', (meRes) => {
            if (meRes && meRes?.personal_details?.id) {
              dispatch({
                type: IS_LOGIN,
                payload: true,
              });
              const data = cookies.get('filledForm');
              if (data) {
                console.log(data, 'DATA nNSID');
                Router.push(`/products?category=${data?.formType}`);
              } else {
                Router.push('/');
              }
            }
          })
        );
      } else {
        dispatch({
          type: IS_LOGIN,
          payload: false,
        });
      }
    })
    .catch((error) => {
      if (cb) cb(error);
      dispatch({
        type: IS_LOGIN,
        payload: false,
      });
      return;
    });
};

export const registerUserAction = (data, cb) => async (dispatch) => {
  await registerUserApi(data)
    .then(async (res) => {
      dispatch({
        type: types.user.REGISTER_USER,
        payload: res,
        registerDate: Date.now(),
      });
      await dispatch(
        loginUserAction({
          USERNAME: data.primary_email,
          PASSWORD: data.password,
        })
      );
      if (cb) cb(res);
    })
    .catch((error) => {
      if (cb) cb(error);
    });
};

export const refreshTokenAction = (data) => async (dispatch) => {
  await refreshToken(data);
};

// refresh or get access token
export const getAccessTokenAction = (data) => async (dispatch) => {
  const res = await getAccessTokenApi(data);
  if (res?.accessToken) {
    cookies.set('accessToken', res.accessToken, { path: '/' });
    cookies.set('refreshToken', res.accessToken, { path: '/' });
    dispatch({
      type: types.user.GET_ACCESS_TOKEN,
      payload: res,
    });
  }
};

export const sendOtpAction = (data, cb) => async (dispatch) => {
  const res = await sentOtpApi(data).catch(() => {
    if (cb) cb();
  });
  dispatch({
    type: types.user.PHONE_VERIFICATION,
    payload: res,
  });
  if (cb) cb(res);
};

export const verifyOtpAction = (data, cb) => async (dispatch) => {
  const res = await verifyOtpApi(data).catch(() => {
    notification.error({
      message: 'Please enter correct OTP',
    });
    dispatch({
      type: types.user.IS_LOGIN,
      payload: false,
    });

    if (cb) cb();
  });
  dispatch({
    type: types.user.PHONE_VERIFICATION,
    payload: res,
  });
  if (cb) cb(res);
  if (res?.isValid) {
    notification.success({
      message: 'Your OTP has been verified',
    });
    Router.push('/auth/upload-documents');
  }
};

export const kycDocumentsAction = (data, type, customerId, cb) => async (
  dispatch
) => {
  const res = await kycDocumentsApi(data, type, customerId);
  if (cb) cb(res);
  dispatch({
    type: types.user.KYC_DOCUMENTS,
    payload: res,
  });
};

export const clearStates = () => async (dispatch) => {
  dispatch({});
};
export const resetUserPassword = (payload, cb) => async (dispatch) => {
  const res = await resetPassword(payload).catch((err) => {
    if (cb) {
      cb(err);
    }
  });
  if (cb) cb(res);
};
export const forgetUserPassword = (payload, cb) => async (dispatch) => {
  const res = await forgetPassword(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};
export const contactUsForm = (payload, cb) => async (dispatch) => {
  const res = await ContactUsForm(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};
export const contactFormSubmit = (payload, cb) => async (dispatch) => {
  const res = await contactUsFormAction(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};
export const updateUserPassword = (payload, cb) => async (dispatch) => {
  const res = await updatePassword(payload).catch((err) => {
    if (cb) {
      cb(err);
    }
  });
  if (cb) {
    cb(res);
  }
};
export const fetchUserAttachmentsAction = (payload, cb) => async (dispatch) => {
  const res = await fetchUserAttachmentApi(payload).catch((err) => {
    if (cb) {
      cb(err);
    }
  });
  if (cb) {
    cb(res);
  }
};

export const getQuoteForm = (payload, cb) => async (dispatch) => {
  const res = await getQuoteSubmit(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const addToCart = (payload, cb) => async (dispatch) => {
  const res = await addToCartSubmit(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const createQuoteFromCart = (payload, cb) => async (dispatch) => {
  const res = await createQuoteFromCartSubmit(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const removeItemFromCart = (payload, cb) => async (dispatch) => {
  const res = await removeItemFromCartService(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const addToPrevCart = (payload, cb) => async (dispatch) => {
  const res = await addToPrevCartSubmit(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const uploadAttachments = async ({ data, quoteId, quoteSeqId }) =>
  Axios.post(
    `${hostname()}/xapi/v1/quote/${quoteId}/item/${quoteSeqId}/attachments`,
    data,
    {
      headers: {
        accessToken: cookies.get('accessToken', { path: '/' }) || null,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => err);

export const uploadAttachmentsForCart = async ({
  data,
  checkoutId,
  cartSeqId,
}) =>
  Axios.post(
    `${hostname()}/xapi/v1/checkouts/${checkoutId}/item/${cartSeqId}/attachments`,
    data,
    {
      headers: {
        accessToken: cookies.get('accessToken', { path: '/' }) || null,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
    .then((response) => {
      return response;
    })
    .catch((err) => err);
