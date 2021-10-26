import { quotes } from '../types';

const initialState = {
  allQuotes: [],
  quoteItems: [],
  globalCheckOutId: null,
  quoteProducts: null,
  notes: null,
  quoteDetails: null,
  emails: null,
  paymentVisible: false,
};
export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_QUOTES:
      return {
        ...state,
        allQuotes: action.payload,
      };
    case quotes.PAYMENT_VISIBILITY:
      return {
        ...state,
        paymentVisible: action.payload,
      };
    case quotes.GET_QUOTES_ITEMS_DETAILS:
      return {
        ...state,
        quoteProducts: action.payload,
      };
    case quotes.GET_QUOTES_DETAILS:
      return {
        ...state,
        quoteDetails: action.payload,
      };
    case quotes.GET_EMAILS:
      return {
        ...state,
        emails: action.payload,
      };
    case quotes.GET_QUOTES_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    case quotes.GET_QUOTE_ITEMS:
      return {
        ...state,
        quoteItems: action.payload,
      };
    case quotes.SET_CHECKOUT_ID:
      return {
        ...state,
        globalCheckOutId: action.payload,
      };
    default:
      return state;
  }
};
