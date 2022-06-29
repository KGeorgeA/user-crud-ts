import { StatusCodes } from 'http-status-codes';
import db from '../../db';
import CustomError from '../../utils/CustomError';

const deleteUser = async (id: number) => {
  const deleteResult = await db.user.delete({ id });

  if (!deleteResult.affected) {
    throw new CustomError({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'User does not exist',
      data: null,
    });
  }

  return null;
};

export default deleteUser;
