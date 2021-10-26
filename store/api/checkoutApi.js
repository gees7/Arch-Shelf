import { callApi } from '../../apiUtils';

import { checkout } from '../apiEndPoints';
import axios from 'axios';

import { cookies } from '../actions/authActions';

export const addItemToCart = async (data, checkOutId) =>
  callApi({
    uriEndPoint: checkout.addItemToCart.v1,
    body: {
      ...data,
    },
    pathParams: {
      checkOutId,
    },
  });

export const createCart = async (data) =>
  callApi({
    uriEndPoint: checkout.createCart.v1,
    body: {
      ...data,
    },
  });

export const deleteItemFromCart = async (data) =>
  callApi({
    uriEndPoint: checkout.deleteItemFromCart.v1,
    pathParams: {
      cartId: data.cartId,
      productId: data.productId,
    },
    body: {
      ...data,
    },
  });

export const refreshCartItems = async ({ cartId, customerId }) =>
  callApi({
    uriEndPoint: checkout.refreshCartItems.v1,
    pathParams: {
      cartId,
      customerId,
    },
  });
export const getCartItems = async (data) =>
  callApi({
    uriEndPoint: checkout.getCartItems.v1,
    pathParams: {
      cartId: data.cartId,
    },
    body: {
      ...data,
    },
  });

export const createCheckOut = async (data) =>
  callApi({
    uriEndPoint: checkout.createCheckOut.v1,
    body: {
      ...data,
    },
    pathParams: {
      checkOutId: data.checkOutId,
    },
    body: {
      ...data,
    },
  });

export const initializeStripePaymentIntentApi = async (data) =>
  callApi({
    uriEndPoint: checkout.initializeStripePayment.v1,
    body: {
      ...data,
    },
    pathParams: {
      checkOutId: data.checkOutId,
    },
    body: {
      ...data,
    },
  });

export const addShippingAddressApi = async (data) =>
  callApi({
    uriEndPoint: checkout.addShippingAddress.v1,
    body: {
      ...data,
    },
    pathParams: {
      checkOutId: data.checkOutId,
    },
    query: {
      id: data.id,
    },
    body: {
      ...data,
    },
  });

export const addEmailToCheckOutApi = async (data) =>
  callApi({
    uriEndPoint: checkout.addEmailToCheckOut.v1,
    body: {
      ...data,
    },
    pathParams: {
      checkOutId: data.checkOutId,
    },
    query: {
      id: data.id,
    },
    body: {
      email: data.email,
    },
  });

export const addPhoneToCheckOutApi = async (data) =>
  callApi({
    uriEndPoint: checkout.addPhoneToCheckOut.v1,
    body: {
      ...data,
    },
    pathParams: {
      checkOutId: data.checkOutId,
    },
    query: {
      id: data.id,
    },
    body: {
      ...data,
    },
  });
export const createCustomerShippingAddressApi = async (data) =>
  callApi({
    uriEndPoint: checkout.createCustomerShippingAddress.v1,
    body: {
      ...data,
    },
    pathParams: {
      customerId: data.customerId,
    },
    body: {
      ...data,
    },
  });
export const createCustomerPhoneNumberApi = async (data) =>
  callApi({
    uriEndPoint: checkout.createCustomerPhoneNumber.v1,
    body: {
      ...data,
    },
    pathParams: {
      customerId: data.customerId,
    },
    body: data.phone,
  });
export const createCustomerEmailAddressApi = async (data) =>
  callApi({
    uriEndPoint: checkout.createCustomerEmailAddress.v1,
    body: {
      ...data,
    },
    pathParams: {
      customerId: data.customerId,
    },
    body: {
      ...data,
    },
  });
export const getcustomerAddressesApi = async (data) =>
  callApi({
    uriEndPoint: checkout.getcustomerAddresses.v1,

    pathParams: {
      customerId: data.customerId,
    },
  });
