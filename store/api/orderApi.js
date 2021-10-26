import { callApi } from '../../apiUtils';

export const getOrdersList = async ({ body, query }) => callApi({
  uriEndPoint: {
    uri: '/orders',
    method: 'POST',
    version: '/xapi/v1',
  },
  query,
  body,
});
