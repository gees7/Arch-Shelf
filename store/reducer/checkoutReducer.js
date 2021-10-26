import * as types from '../types';

const initialState = {
  cartItems: [],
  loading: false,
  cartItemsCount: 0,
  error: null,
  wireTransfer: null,
  removedCartItems: [],
};
export const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.checkout.ADD_ITEM_TO_CART:
      return {
        ...state,
        // cartItems: action.payload,
        error: null,
        loading: false,
      };
    case types.checkout.GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
        error: null,
        loading: false,
      };
    case types.checkout.CART_ITEM_COUNT:
      return {
        ...state,
        cartItemsCount: state.cartItemsCount + 1,
      };
    case types.checkout.INIT_WIRE_TRANSFER:
      return {
        ...state,
        wireTransfer: {
          ...action.payload,
        },
      };
    case types.checkout.SET_REOVED_CART_ITEMS:
      return {
        ...state,
        removedCartItems: action.payload,
      };
    case types.checkout.CLEAR_REMOVED_CART_ITEMS:
      return {
        ...state,
        removedCartItems: [],
      };
    default:
      return state;
  }
};
