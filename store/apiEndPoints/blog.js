import defaults from './defaults';

const blog = {
  getFeeds: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/feeds",
    },
  },

  getFeed: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/feeds/:id",
    },
  },
 
  getDashboardFeed: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/dashboardFeeds",
    },
  },

  getComments: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/feeds/:id/comment",
    },
  },

  getOptions: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: "/category/list",
    },
  },
  
};

export default blog;
