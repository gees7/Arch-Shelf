import defaults from './defaults';

const query = {
  addQuery: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/question',
    },
  },
};

export default query;
