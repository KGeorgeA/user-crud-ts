import * as yup from 'yup';
import User from '../../../db/entities/User.entity';
import constants from '../../../utils/constants';

const requestParams = {
  params: {
    page: yup.string().matches(constants.numberRegex),
    perPage: yup.string().matches(constants.numberRegex),
    sort: yup.object().shape({
      key: yup.string().oneOf(Object.keys(User)),
      order: yup.string().oneOf(['asc', 'desc', 'ASC', 'DESC']),
    }),
    sortBy: yup.object().shape({}),
    search: yup.string(),
  },
};

export default {
  ...requestParams,
};
