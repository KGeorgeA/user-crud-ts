import { StatusCodes } from 'http-status-codes';
import db from '../../db';
import CustomError from '../../utils/CustomError';

const checkIfEmailTaken = async (
  email: string,
  shouldThrowError = false,
  userId: number | null = null,
): Promise<boolean> => {
  const owner = await db.user.findOneBy({ email });

  if (owner && shouldThrowError && userId === null) {
    if (owner.id === userId) {
      return false;
    }

    throw new CustomError({
      statusCode: StatusCodes.CONFLICT,
      message: 'Email already in use',
      data: null,
    });
  }

  return !!owner;
};

export default checkIfEmailTaken;
