import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestBody = {
  body: {
    email: yup
      .string()
      .required(constants.validationMessages.emailRequired)
      .trim()
      .email(constants.validationMessages.emailInvalid),
    password: yup
      .string()
      .required(constants.validationMessages.passwordRequired)
      .min(4, constants.validationMessages.passwordMin)
      .max(16, constants.validationMessages.passwordMax),
  },
};

export default requestBody;
