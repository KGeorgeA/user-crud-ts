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

export default requestParams;
