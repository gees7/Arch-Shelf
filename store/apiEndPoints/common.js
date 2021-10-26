import defaults from './defaults';

const commonEndPoints = {
  getProductQuote: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/quote/:partyId',
    },
  },
  makePayment: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/stripe/makePayment',
    },
  },
  completePayment: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/payment',
    },
  },
  emailQuote: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/email',
    },
  },
  getAllQuotes: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/quote/search',
    },
  },

  getSingleQuotesItem: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/items',
    },
  },

  getQuoteDetailsApi: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId',
    },
  },

  getQuoteEmailsApi: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/emails/logs',
    },
  },

  getQuoteNotesService: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/notes',
    },
  },

  getSingleQuotesItem: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/items',
    },
  },

  getAllQuoteItems: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/checkouts/:id',
    },
  },

  addQuoteNoteApi: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/note',
    },
  },

  changeProductQuantity: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/quote/item/:quoteItemId/quantity',
    },
  },
  removeProductItem: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/items/:quoteItemId',
    },
  },
  updateQuoteNoteApi: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/note',
    },
  },

  deleteQuoteNoteApi: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/quote/:quoteId/note',
    },
  },
  addToCart: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/checkouts',
    },
  },
  addToPrevCart: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkoutId',
    },
  },
  removeItemFromCart: {
    v1: {
      ...defaults.methods.DELETE,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkoutId/cart/item/:cartItemSeqId',
    },
  },
  createQuoteFromCart: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkoutId/quote',
    },
  },
  changeQuantity: {
    v1: {
      ...defaults.methods.PUT,
      ...defaults.versions.v1,
      uri: '/checkouts/:checkoutId/cart/item/:cartSeqId/quantity',
    },
  },
};

export default commonEndPoints;
