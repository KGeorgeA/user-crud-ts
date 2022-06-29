import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    userId: yup.string().required('User id is required').matches(constants.numberRegex),
  },
};

const requestBody = {
  body: {
    firstName: yup.string(),
    lastName: yup.string(),
    gender: yup.string().oneOf(['male', 'female', null]),
    email: yup.string().trim().email('Email is invalid'),
    phone: yup.string(),
    DoB: yup.date(),
    role: yup.string().oneOf(['admin', 'user', null]),
  },
};

export default {
  ...requestBody,
  ...requestParams,
};
