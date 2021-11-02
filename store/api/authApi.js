import Axios from 'axios';
import Router from 'next/router';
import { callApi, hostname } from '../../apiUtils';
import { access, product, user } from '../apiEndPoints';
import { cookies } from '../actions/authActions';
import commonEndPoints from '../apiEndPoints/common';

// api for getting me details
export const getMeApi = () =>
  callApi(
    { uriEndPoint: access.me.v1, body: {} },
    {
      disableNotifications: true,
    }
  );

// api for getting the access token
export const getAccessTokenApi = () =>
  callApi({ uriEndPoint: access.getAccessToken.v1, body: {} });

export const registerUserApi = (data) =>
  callApi({
    uriEndPoint: {
      uri: '/accounts',
      method: 'POST',
      version: '/xapi/v1',
    },
    body: {
      ...data,
      product_store_id: 'SG.store',
    },
  });

export const loginUserApi = (data) =>
  Axios({
    method: 'POST',
    url: `${hostname()}/xapi/v1/access/token`,
    headers: {
      apiKey: btoa(`${data.USERNAME}:${data.PASSWORD}`),
    },
  });

export const sentOtpApi = (data) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/contact/:contactId',
      method: 'POST',
      version: '/xapi/v1',
    },
    pathParams: {
      customerId: data.customerId,
      contactId: data.contactId,
    },
  });

export const verifyOtpApi = (data) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/contact/:contactId/verify',
      method: 'POST',
      version: '/xapi/v1',
    },
    pathParams: {
      customerId: data.customerId,
      contactId: data.contactId,
    },
    body: {
      otp: data.otp,
    },
  });

export const refreshToken = () =>
  callApi({
    uriEndPoint: {
      uri: '/access/refresh',
      method: 'POST',
      version: '/xapi/v1',
      headerProps: {
        refreshToken: cookies.get('refreshToken', { path: '/' }),
        storeId: 'cflare.product.store',
      },
    },
  }).then((res) => {
    if (res) {
      cookies.set('accessToken', res.accessToken, { path: '/' });
      cookies.set('refreshToken', res.accessToken, { path: '/' });
    }
  });
// .catch(() => Router.replace('/auth/login'));

export const kycDocumentsApi = async (data, type, customerId) => {
  try {
    const response = await Axios.post(
      `${hostname()}/xapi/v1/customers/${customerId}/content?document_type=${type}`,
      data,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'multipart/form-data;',
          accessToken: cookies.get('accessToken', { path: '/' }),
          storeId: 'cflare.product.store',
        },
      }
    );
    return response;
  } catch (e) {
    return e;
  }
};

export const resetPassword = (data) =>
  Axios.post(`${hostname()}/xapi/v1/user/reset/password`, data);

export const ContactUsForm = (data) =>
  callApi({
    uriEndPoint: {
      uri: '/user/message',
      method: 'POST',
      version: '/xapi/v1',
    },
    body: {
      ...data,
      store: { id: 'cflare.product.store' },
    },
  });

export const contactUsFormAction = (data) =>
  callApi({
    uriEndPoint: product.contactUs.v1,
    body: data,
  });

export const getQuoteSubmit = ({ partyId, data }) =>
  callApi({
    uriEndPoint: commonEndPoints.getProductQuote.v1,
    pathParams: {
      partyId,
    },
    body: data,
  });

export const addToCartSubmit = ({ query, data, currency, customer_id }) =>
  callApi({
    uriEndPoint: commonEndPoints.addToCart.v1,
    query,
    body: {
      currency,
      customer_id,
      cart_items: [data],
    },
  });

export const createQuoteFromCartSubmit = ({ pathParams }) =>
  callApi({
    uriEndPoint: commonEndPoints.createQuoteFromCart.v1,
    pathParams,
  });

export const removeItemFromCartService = ({ pathParams }) =>
  callApi({
    uriEndPoint: commonEndPoints.removeItemFromCart.v1,
    pathParams,
  });

export const addToPrevCartSubmit = ({
  query,
  data,
  currency,
  customer_id,
  pathParams,
}) =>
  callApi({
    uriEndPoint: commonEndPoints.addToPrevCart.v1,
    query,
    pathParams,
    body: {
      currency,
      customer_id,
      cart_items: [data],
    },
  });

export const forgetPassword = (data) =>
  Axios.post(`${hostname()}/xapi/v1/user/reset/password/link`, data);

export const updatePassword = (data) =>
  callApi(
    {
      uriEndPoint: {
        uri: '/user/update/password',
        method: 'POST',
        version: '/xapi/v1',
      },
      body: {
        email_address: data.UserName,
        old_password: data.password,
        password: data.new_password,
      },
    },
    {
      disableNotifications: true,
    }
  );

export const fetchUserAttachmentApi = async (data) => {
  // const EndPoint
  return callApi({
    uriEndPoint: user.kycDocumentFetch.v1,
    body: {
      ...data,
    },
    pathParams: {
      customerId: data.customerId,
    },
  });
};

// for contact us page
// export const contactUs = (data) =>
//   Axios.post(`${hostname()}/xapi/v1/user/reset/password`, data);
