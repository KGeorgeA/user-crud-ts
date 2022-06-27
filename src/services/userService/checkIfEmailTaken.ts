import { StatusCodes } from 'http-status-codes';
import db from '../../db';
import CustomError from '../../utils/CustomError';

const checkIfEmailTaken = async (email: string, shouldThrowError = false): Promise<boolean> => {
  const user = await db.user.findOneBy({ email });

  if (user && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.CONFLICT,
      message: 'Email already in use',
      data: email,
    });
  }

  return !!user;
};

export default checkIfEmailTaken;
