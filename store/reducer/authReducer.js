import * as types from '../types';
import {
  LOGIN_USER,
  SET_CURRENT_USER,
  SET_USER_ROLE,
  AUTH_LOADING,
} from '../types/userTypes';

const initialState = {
  userType: '',
  isLogin: false,
  customerAddresses: [],
  registerData: {},
  loading: false,
  loginData: {},
  phoneVerificationData: {},
  kycAttachmentsData: {},
  error: null,
  accessToken: null,
  refreshToken: null,
  currentUser: null,
  userRole: 'GUEST_USER',
  filledForm: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.user.IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };

    case types.user.FILLED_FORM:
      return {
        ...state,
        filledForm: action.payload,
      };

    case types.user.USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case types.user.REGISTER_USER:
      return {
        ...state,
        registerData: action.payload,
        error: null,
        loading: false,
      };
    case types.user.KYC_DOCUMENTSLOGIN_USER:
      return {
        ...state,
        loginData: action.payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        loginData: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };
    case types.user.KYC_DOCUMENTSPHONE_VERIFICATION:
      return {
        ...state,
        phoneVerificationData: action.payload,
      };
    case types.user.KYC_DOCUMENTSKYC_DOCUMENTS:
      return {
        ...state,
        kycAttachmentsData: action.payload,
      };
    case types.user.GET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case SET_USER_ROLE: {
      return {
        ...state,
        userType: action.payload,
      };
    }

    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
