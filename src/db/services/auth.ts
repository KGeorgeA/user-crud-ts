// import USER_MODEL from '../models/User';
import logger from 'src/logger';

const signUp = async (params) => {
  logger.info(params, 'signUp, got params -> ');
  return null;
};

const signIn = async (params) => {
  logger.info(params, 'signIn, got params -> ');
  return null;
};

// const logout // ???

export default {
  signUp,
  signIn,
};
