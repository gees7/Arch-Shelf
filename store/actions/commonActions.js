import { SET_ALL_COUNTRIES_LIST } from '../types/commonTypes';

const { countryList } = require('../api/commonApi');

export const getAllCountries = (cb) => async (dispatch) => {
  const res = await countryList();
  dispatch({
    type: SET_ALL_COUNTRIES_LIST,
    payload: res.data,
  });
  if (cb) cb();
};
