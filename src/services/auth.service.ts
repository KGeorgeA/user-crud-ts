// import USER_MODEL from '../models/User';
import { StatusCodes } from 'http-status-codes';
import logger from 'src/utils';
import createError from 'src/utils/createError';
import usersService from './users.service';

export type SignUpParamsType = {
  email: string;
  password: string;
};
const signUp = async (params: SignUpParamsType) => {
  logger.info(params, 'signUp, got params -> ');
  try {
    // const user = await USER_MODEL.findOne({ where: { email: params.email } });
    // if (user) {
    //   throw createError('Email already in use', { code: StatusCodes.CONFLICT });
    // }
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

// const logout // ???

export default {
  signUp,
  signIn,
};
