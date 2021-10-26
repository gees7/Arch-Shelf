import { callApi } from '../../apiUtils';
import { common } from '../apiEndPoints';

export const getQuoteList = ({ body, query }) =>
  callApi({
    uriEndPoint: common.getAllQuotes.v1,
    body,
    query,
  })
    .then((response) => response)
    .catch((err) => err);

export const getQuoteSingleItem = ({ pathParams }) =>
  callApi({
    uriEndPoint: common.getSingleQuotesItem.v1,
    pathParams,
  })
    .then((response) => response)
    .catch((err) => err);

export const getQuoteDetailsApi = ({ pathParams }) =>
  callApi({
    uriEndPoint: common.getQuoteDetailsApi.v1,
    pathParams,
  })
    .then((response) => response)
    .catch((err) => err);

export const getQuoteEmailsService = ({ pathParams }) =>
  callApi({
    uriEndPoint: common.getQuoteEmailsApi.v1,
    pathParams,
  })
    .then((response) => response)
    .catch((err) => err);

export const getQuoteNotesService = ({ pathParams }) =>
  callApi({
    uriEndPoint: common.getQuoteNotesService.v1,
    pathParams,
  })
    .then((response) => response)
    .catch((err) => err);

export const getQuoteItemList = ({ pathParams, query }) =>
  callApi({
    uriEndPoint: common.getAllQuoteItems.v1,
    pathParams,
    query,
  })
    .then((response) => response)
    .catch((err) => err);

export const addQuoteNoteApi = ({ pathParams, data }) =>
  callApi({
    uriEndPoint: common.addQuoteNoteApi.v1,
    pathParams,
    body: data,
  })
    .then((response) => response)
    .catch((err) => err);

export const updateQuoteNoteService = ({ pathParams, data }) =>
  callApi({
    uriEndPoint: common.updateQuoteNoteApi.v1,
    pathParams,
    body: data,
  })
    .then((response) => response)
    .catch((err) => err);

export const deleteQuoteNoteApi = ({ pathParams, data }) =>
  callApi({
    uriEndPoint: common.deleteQuoteNoteApi.v1,
    pathParams,
    body: data,
  })
    .then((response) => response)
    .catch((err) => err);

export const changeQuantityService = ({ pathParams, query }) =>
  callApi({
    uriEndPoint: common.changeQuantity.v1,
    pathParams,
    query,
  })
    .then((response) => response)
    .catch((err) => err);

export const changeProductQuantityService = ({ pathParams, query }) =>
  callApi({
    uriEndPoint: common.changeProductQuantity.v1,
    pathParams,
    query,
  })
    .then((response) => response)
    .catch((err) => err);

export const removeProductItemService = ({ pathParams }) =>
  callApi({
    uriEndPoint: common.removeProductItem.v1,
    pathParams,
  })
    .then((response) => response)
    .catch((err) => err);

export const emailQuoteService = ({ pathParams, body }) =>
  callApi({
    uriEndPoint: common.emailQuote.v1,
    pathParams,
    body,
  })
    .then((response) => response)
    .catch((err) => err);

export const makePaymentService = ({ body }) =>
  callApi({
    uriEndPoint: common.makePayment.v1,
    body,
  })
    .then((response) => response)
    .catch((err) => err);

export const completePaymentService = ({ body, pathParams }) =>
  callApi({
    uriEndPoint: common.completePayment.v1,
    body,
    pathParams,
  })
    .then((response) => response)
    .catch((err) => err);
