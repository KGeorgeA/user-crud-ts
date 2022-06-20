import { StatusCodes } from 'http-status-codes';
import userModel from '../db/models/user';
import CustomError, { createInternalServerError } from '../utils/CustomError';

const checkIfEmailTaken = async (email: string, shouldThrowError = false) => {
  try {
    const isExist = await userModel.findOne(email);

    if (isExist && shouldThrowError) {
      // throw CustomError();
    }

    return false;
  } catch (error) {
    // throw createInternalServerError();
  }
};

export default checkIfEmailTaken;
