import defaults from './defaults';

const checkout = {
  createCart: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/checkouts',
    },
  },
  addItemToCart: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkOutId',
    },
  },
  deleteItemFromCart: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/checkouts/:cartId/product/:productId',
    },
  },
  refreshCartItems: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:cartId/customer/:customerId',
    },
  },
  getCartItems: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/checkouts/:cartId',
    },
  },
  createCheckOut: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkOutId/complete',
    },
  },
  initializeStripePayment: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkOutId/payment/initiate',
    },
  },
  createCustomerShippingAddress: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/customers/:customerId/address',
    },
  },
  getcustomerAddresses: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/customers/:customerId/addresses',
    },
  },
  createCustomerEmailAddress: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/customers/:customerId/email',
    },
  },
  createCustomerPhoneNumber: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/customers/:customerId/phone',
    },
  },
  addShippingAddress: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkOutId/address',
    },
  },
  addEmailToCheckOut: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkOutId/email',
    },
  },
  addPhoneToCheckOut: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkOutId/phone',
    },
  },
};

export default checkout;
