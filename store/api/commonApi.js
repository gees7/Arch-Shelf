import Axios from 'axios';
import { hostname, callApi } from '../../apiUtils';
import { user } from '../apiEndPoints';

const hostUrl = hostname();
export function countryList() {
  return Axios({
    method: 'get',
    url: `${hostUrl}/xapi/v1/common/country`,
  })
    .then((response) => {
      const status = 'ok';
      return {
        data: response.data,
        status,
      };
    })
    .catch(() => {
      const status = 'notok';
      return {
        status,
      };
    });
}

export const validatePhoneNumber = (value) =>
  callApi(
    {
      uriEndPoint: {
        uri: '/common/validate/phone',
        method: 'GET',
        version: '/xapi/v1',
      },
      query: {
        number: value,
        country: 'AUS',
      },
    },
    {
      disableNotifications: true,
    }
  );

export function checkExistingLoginId(loginId) {
  return callApi({
    showPopUpError: false,
    uriEndPoint: user.isEmailExists.v1,
    query: {
      user_id: loginId,
    },
  })
    .then((res) => res)
    .catch((err) => err);
}
