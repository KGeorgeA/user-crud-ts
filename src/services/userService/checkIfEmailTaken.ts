import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import db from '../../db';
import CustomError from '../../utils/CustomError';

const checkIfEmailTaken = async (email: string, shouldThrowError = false, message = ''): Promise<boolean> => {
  const user = await db.user.findOneBy({ email });

  if (user && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.CONFLICT,
      message: `${ReasonPhrases.CONFLICT}\n${message ?? ''}`,
      data: email,
    });
  }

  if (user) {
    return true;
  }

  return false;
};

export default checkIfEmailTaken;
