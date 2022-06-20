// TO-DO: uncomment when done with db connection
// import USER_MODEL from '../models/User';
// import { StatusCodes } from 'http-status-codes';
import logger from '../../utils/logger';
import checkIfEmailTaken from '../checkIfEmailTaken';
// import createError from '../utils/createError';
// import userService from '../services/user';

export type SignUpParamsType = {
  email: string;
  password: string;
};
const signUp = async (params: SignUpParamsType) => {
  logger.info(params, 'signUp, got params -> ');
  try {
    const isEmailExist = await checkIfEmailTaken(params.email);
    // const user = await USER_MODEL.findOne({ where: { email: params.email } });
    // if (user) {
    //   throw createError();
    // }
    if (!isEmailExist) {
      return 2;
    }
  } catch (error) {
    //
  }
  return null;
};

export type SignInParamsType = {
  email: string;
  password: string;
};
const signIn = async (params: SignInParamsType) => {
  logger.info(params, 'signIn, got params -> ');
  return null;
};

export default {
  signUp,
  signIn,
};
