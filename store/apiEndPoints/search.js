import defaults from './defaults';

const search = {
  getSearch: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/search',
    },
  },
};

export default search;
