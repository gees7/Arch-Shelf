import defaults from './defaults';

const blog = {
  getCompetitions: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/competitions',
    },
  },
  getCompetition: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/competitions/:id',
    },
  },
};

export default blog;
