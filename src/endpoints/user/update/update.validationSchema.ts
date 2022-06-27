import * as yup from 'yup';
import { UserGender, UserRoleType } from '../../../db/entities/User.entity';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    userId: yup.string().required('User id is required').matches(constants.numberRegex),
  },
};

const requestBody = {
  body: {
    updatedUser: {
      firstName: yup.string(),
      lastName: yup.string(),
      gender: yup.string().oneOf([]),
      email: yup.string().required().trim().email(),
      phone: yup.string(),
      DoB: yup.date(),
      role: yup.string().oneOf([]),
    },
  },
};

export default {
  ...requestBody,
  ...requestParams,
};
