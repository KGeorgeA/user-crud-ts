import * as yup from 'yup';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    page: yup.string().matches(constants.numberRegex),
    perPage: yup.string().matches(constants.numberRegex),
    sort: yup.string(),
    direction: yup.string().oneOf(['asc', 'ASC', 'desc', 'DESC']),
    searchString: yup.string(),
  },
};

export default requestParams;
