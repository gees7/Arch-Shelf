import defaults from './defaults';

const user = {
  create: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/accounts',
    },
  },
  login: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/access/token',
    },
  },
  forgotPassword: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/user/reset/password',
    },
  },
  verifyEmailLink: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/user/verify/link',
    },
  },
  checkExisting: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/accounts/emails/:email_id/check-existing',
    },
  },
  resendEmailConfirmation: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/user/resend/emailConfirmation',
    },
  },
  updatePassword: {
    v1: {
      ...defaults.methods.POST,
      ...defaults.versions.v1,
      uri: '/user/update/password',
    },
  },
  kycDocumentFetch: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/customers/:customerId/content',
    },
  },
  isEmailExists: {
    v1: {
      ...defaults.methods.GET,
      ...defaults.versions.v1,
      uri: '/user/isExistingLoginId',
    },
  },
};

export default user;
