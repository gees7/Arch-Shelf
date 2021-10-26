import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';
import { checkoutReducer } from './checkoutReducer';
import { commonReducer } from './commonReducer';
import { orderReducer } from './orderReducer';
import { loadingReducer } from './loadingReducer';
import { customerReducer } from './customerReducer';
import { userReducer } from './userReducer';
import { quoteReducer } from './quoteReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  checkout: checkoutReducer,
  common: commonReducer,
  orders: orderReducer,
  customer: customerReducer,
  user: userReducer,
  loading: loadingReducer,
  quotes: quoteReducer,
});
