import * as types from '../types';
import {
  ProductSearchApi,
  getProductDetails,
  getProductImagesApi,
  diamondFeatures,
  meeleDiamondFeatures,
  getProductVideoApi,
} from '../api/productApi';
import {
  GET_PRODUCT_DETAILS,
  SET_PRODUCT_IMAGES,
  SET_360_PRODUCT_IMAGES,
  SET_PRODUCT_VIDEOS,
  GET_DIAMOND_FEATURES,
  GET_MELEE_DIAMOND_FEATURES,
} from '../types/productTypes';
/**
 *
 *
 * @param {import("redux").Dispatch} dispatch
 */

// get the gemstones data
export const getGemstonesAction = (data, cb) => async (dispatch, getState) => {
  const { isLogin } = getState().auth;
  const res = await ProductSearchApi(data, isLogin);
  dispatch({
    type: types.product.GET_GEMSTONES,
    payload: res,
  });
  if (cb) cb(res);
};
// get the melee-diamonds data
export const getMeleeDiamondsAction = (data, cb) => async (
  dispatch,
  getState
) => {
  const { isLogin } = getState().auth;
  const res = await ProductSearchApi(data, isLogin);
  dispatch({
    type: types.product.GET_MELEE_DIAMONDS,
    payload: res,
  });
  if (cb) cb(res);
};

// get the loose-diamonds data
export const getLooseDiamondsAction = (data, cb) => async (
  dispatch,
  getState
) => {
  const { isLogin } = getState().auth;
  const res = await ProductSearchApi(data, isLogin);
  dispatch({
    type: types.product.GET_LOOSE_DIAMONDS,
    payload: res,
  });
  if (cb) cb(res);
};

export const getProductInfo = (payload) => async (dispatch) => {
  const res = await getProductDetails(payload);
  dispatch({
    type: GET_PRODUCT_DETAILS,
    payload: res,
  });
};

export const getProductImages = (payload) => async (dispatch) => {
  const res = await getProductImagesApi(payload);
  dispatch({
    type: SET_PRODUCT_IMAGES,
    payload: res,
  });
};

export const get360ProductImages = (payload) => async (dispatch) => {
  const res = await getProductImagesApi(payload);
  dispatch({
    type: SET_360_PRODUCT_IMAGES,
    payload: res,
  });
};
export const getProductVideos = (payload) => async (dispatch) => {
  const res = await getProductVideoApi(payload);
  dispatch({
    type: SET_PRODUCT_VIDEOS,
    payload: res,
  });
  return res;
 
};
export const getDiamondFeatures = (payload) => async (dispatch) => {
  const res = await diamondFeatures(payload);
  dispatch({
    type: GET_DIAMOND_FEATURES,
    payload: res,
  });
};

export const getMeleeDiamondFeatures = () => async (dispatch) => {
  const res = await meeleDiamondFeatures();
  dispatch({
    type: GET_MELEE_DIAMOND_FEATURES,
    payload: res,
  });
};
