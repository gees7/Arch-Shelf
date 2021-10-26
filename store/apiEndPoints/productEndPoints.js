import defaults from './defaults';

const product = {
  search: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/product/products/searchV2',
    },
  },
  contactUs: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/customer/contact/info',
    },
  },
  searchv3: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/product/products/searchV3',
    },
  },
  diamondFeatures: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/product/diamondShapes',
    },
  },
  meeleDiamondFeatures: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/product/meleeDiamond/features',
    },
  },
};

export default product;
