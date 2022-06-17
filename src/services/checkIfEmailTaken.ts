import { StatusCodes } from 'http-status-codes';
import userModel from '../db/models/user';
import createError, { createInternalServerError } from '../utils/createError';

const checkIfEmailTaken = async (email: string, shouldThrowError = false) => {
  try {
    const isExist = await userModel.findOne(email);

    if (isExist && shouldThrowError) {
      throw createError('This email already exist', { code: StatusCodes.CONFLICT });
    }

    return false;
  } catch (error) {
    throw createInternalServerError();
  }
};

export default checkIfEmailTaken;
