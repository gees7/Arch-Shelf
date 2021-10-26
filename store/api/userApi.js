import { callApi } from '../../apiUtils';

export const updateCustomerPhoneNumber = ({ body, pathParams }) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/phone/:phoneId',
      method: 'PUT',
      version: '/xapi/v1',
    },
    body,
    pathParams,
  });

// export const updateCustomerName = ({ body, pathParams } => callApi({
//   uriEndPoint: {
//     uri: "/customers/:customerId/name",
//   },
// }));

export const updateCustomerEmailaddress = ({ body, pathParams }) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/email/:emailId',
      method: 'PUT',
      version: '/xapi/v1',
    },
    body,
    pathParams,
  });

export const getUserInfo = ({ customerId }) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId',
      method: 'GET',
      version: '/xapi/v1',
    },
    pathParams: { customerId },
  });

export const removeAddress = (payload) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/addresses/:addressId',
      method: 'DELETE',
      version: '/xapi/v1',
    },
    pathParams: payload,
  });

export const updateAddress = ({ pathParams, body }) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/address/:addressId',
      method: 'PUT',
      version: '/xapi/v1',
    },
    pathParams,
    body,
  });

export const updateUserName = ({ pathParams, body }) =>
  callApi({
    uriEndPoint: {
      uri: '/customers/:customerId/contact',
      method: 'PUT',
      version: '/xapi/v1',
    },
    pathParams,
    body,
  });
