// import USER_MODEL from '../models/User';
import logger from 'src/logger';

const changePassword = async (params) => {
  logger.info(params, 'changePassword, got params ->');
  return { id: 2 };
};

// const logout // ???

export default {
  changePassword,
};
