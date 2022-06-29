import { StatusCodes } from 'http-status-codes';
import { FindOptionsWhere } from 'typeorm';
import db from '../../db';
import type User from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';

const findUserBy = async (
  params: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  shouldThrowError = false,
) => {
  const data = await db.user.findOneBy(params);

  if (!data && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'User does not exist',
      data: null,
    });
  }

  return data;
};

export default findUserBy;
