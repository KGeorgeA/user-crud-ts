import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    userId: yup
      .string()
      .required(constants.validationMessages.userRequired)
      .matches(constants.numberRegex),
  },
};

const requestBody = {
  body: {
    oldPassword: yup
      .string()
      .required('Old password is required')
      .trim(),
    password: yup
      .string()
      .required(constants.validationMessages.passwordRequired)
      .trim()
      .min(4, constants.validationMessages.passwordMin)
      .max(16, constants.validationMessages.passwordMax),
  },
};

export default {
  ...requestParams,
  ...requestBody,
};
