import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    userId: yup.string().required('User id is required').matches(constants.numberRegex),
  },
};

export default requestParams;
