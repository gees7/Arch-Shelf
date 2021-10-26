import {
  getQuoteList,
  getQuoteItemList,
  changeQuantityService,
  getQuoteSingleItem,
  addQuoteNoteApi,
  getQuoteNotesService,
  updateQuoteNoteService,
  deleteQuoteNoteApi,
  getQuoteDetailsApi,
  emailQuoteService,
  makePaymentService,
  completePaymentService,
  getQuoteEmailsService,
  changeProductQuantityService,
  removeProductItemService,
} from '../api/quoteApi';
import {
  CHANGE_CART_ITEM_QUANTITY,
  GET_QUOTES,
  GET_QUOTES_NOTES,
  GET_QUOTE_ITEMS,
  GET_QUOTES_ITEMS_DETAILS,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  GET_QUOTES_DETAILS,
  PAYMENT_VISIBILITY,
  GET_EMAILS,
} from '../types/quoteTypes';

export const getQuotes = (payload, cb) => async (dispatch) => {
  const res = await getQuoteList(payload);
  if (res) {
    dispatch({
      type: GET_QUOTES,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const getQuotesItemDetails = (payload, cb) => async (dispatch) => {
  const res = await getQuoteSingleItem(payload);
  if (res) {
    dispatch({
      type: GET_QUOTES_ITEMS_DETAILS,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const getQuoteDetails = (payload, cb) => async (dispatch) => {
  const res = await getQuoteDetailsApi(payload);
  if (res) {
    dispatch({
      type: GET_QUOTES_DETAILS,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const getQuoteEmails = (payload, cb) => async (dispatch) => {
  const res = await getQuoteEmailsService(payload);
  if (res) {
    dispatch({
      type: GET_EMAILS,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const getAllQuoteNotes = (payload, cb) => async (dispatch) => {
  const res = await getQuoteNotesService(payload);
  if (res) {
    dispatch({
      type: GET_QUOTES_NOTES,
      payload: res,
    });
  }
};

export const emailQuote = (payload, cb) => async (dispatch) => {
  const res = await emailQuoteService(payload);
  if (cb) cb(res);
};

export const getQuoteItems = (payload, cb) => async (dispatch) => {
  const res = await getQuoteItemList(payload);
  if (res) {
    dispatch({
      type: GET_QUOTE_ITEMS,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const addQuoteNote = (payload, cb) => async (dispatch) => {
  const res = await addQuoteNoteApi(payload);
  if (res) {
    dispatch({
      type: ADD_NOTE,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const updateQuoteNote = (payload, cb) => async (dispatch) => {
  const res = await updateQuoteNoteService(payload);
  if (res) {
    dispatch({
      type: UPDATE_NOTE,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const deleteQuoteNote = (payload, cb) => async (dispatch) => {
  const res = await deleteQuoteNoteApi(payload);
  if (res) {
    dispatch({
      type: DELETE_NOTE,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const changeQuantity = (payload, cb) => async (dispatch) => {
  const res = await changeQuantityService(payload);
  if (res) {
    dispatch({
      type: GET_QUOTE_ITEMS,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const changeProductQuantity = (payload, cb) => async (dispatch) => {
  const res = await changeProductQuantityService(payload);
  if (res) {
    dispatch({
      type: GET_QUOTES_ITEMS_DETAILS,
      payload: res,
    });
  }
  if (cb) cb(res);
};

export const removeProductItem = (payload, cb) => async (dispatch) => {
  const res = await removeProductItemService(payload).catch((err) => {
    if (cb) cb(err);
  });
  if (cb) cb(res);
};

export const paymentVisibility = (payload, cb) => async (dispatch) => {
  dispatch({
    type: PAYMENT_VISIBILITY,
    payload,
  });
};

export const makePayment = (payload, cb) => async (dispatch) => {
  const res = await makePaymentService(payload);
  // if (res) {
  //   dispatch({
  //     type: GET_QUOTE_ITEMS,
  //     payload: res,
  //   });
  // }
  if (cb) cb(res);
};

export const completePayment = (payload, cb) => async (dispatch) => {
  const res = await completePaymentService(payload);
  // if (res) {
  //   dispatch({
  //     type: GET_QUOTE_ITEMS,
  //     payload: res,
  //   });
  // }
  if (cb) cb(res);
};
