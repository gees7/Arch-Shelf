import * as types from '../types';
import {
  GET_PRODUCT_DETAILS,
  GET_LOOSE_DIAMONDS,
  SET_PRODUCT_IMAGES,
  SET_360_PRODUCT_IMAGES,
  GET_DIAMOND_FEATURES,
  GET_MELEE_DIAMOND_FEATURES,
} from '../types/productTypes';

const initialState = {
  gemstonesData: {},
  loading: false,
  productInfo: null,
  error: null,
  looseDiamondsList: null,
  diamondFeatures: null,
  meleeDiamondFeatures: null,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.product.GET_GEMSTONES:
      return {
        ...state,
        gemstonesData: action.payload,
        error: null,
        loading: false,
      };

    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        productInfo: {
          ...state.productInfo,
          ...action.payload,
        },
      };
    case GET_LOOSE_DIAMONDS:
      return {
        ...state,
        looseDiamondsList: action.payload,
      };
    case SET_PRODUCT_IMAGES:
      return {
        ...state,
        productInfo: {
          ...state.productInfo,
          images: [...action.payload],
        },
      };
    case SET_360_PRODUCT_IMAGES:
      return {
        ...state,
        productInfo: {
          ...state.productInfo,
          imgae360: [...action.payload],
        },
      };
    case GET_DIAMOND_FEATURES:
      return {
        ...state,
        diamondFeatures: action.payload,
      };
    case GET_MELEE_DIAMOND_FEATURES:
      return {
        ...state,
        meleeDiamondFeatures: action.payload,
      };
    default:
      return state;
  }
};
