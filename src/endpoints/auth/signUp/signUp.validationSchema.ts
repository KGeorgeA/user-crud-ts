import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestBody = yup.object({
  body: yup.object({
    email: yup
      .string()
      .required('Email is required')
      .trim()
      .email('Email is invalid'),
    password: yup
      .string()
      .required('Password is required')
      // .min(4, 'Password must have at least 4 charachers')
      .min(4, constants.validationMessages.passwordMin)
      // .max(16, 'Password can not be longer than 16 characters'),
      .max(16, constants.validationMessages.passwordMax),
  }),
});

export default {
  ...requestBody,
};
