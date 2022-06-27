import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    userId: yup.string().required('User id is required').matches(constants.numberRegex),
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
      .required('Password is required')
      .trim()
      // .min(4, 'Password must have at least 4 charachers')
      .min(4, constants.validationMessages.passwordMin)
      // .max(16, 'Password can not be longer than 16 characters'),
      .max(16, constants.validationMessages.passwordMax),
  },
};

export default {
  ...requestParams,
  ...requestBody,
};
