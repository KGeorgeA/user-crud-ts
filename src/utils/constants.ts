/* eslint-disable no-template-curly-in-string */
const numberRegex = /^[0-9]*$/gm;

const validationMessages = {
  emailRequired: 'Email is required',
  emailInvalid: 'Email is invalid',

  passwordMin: 'Password must contain ${min} characters',
  passwordMax: 'Password must contain ${max} characters',
};

export default {
  numberRegex,
  validationMessages,
};
