import { StatusCodes } from 'http-status-codes';
import { FindOptionsWhere } from 'typeorm';
import db from '../../db';
import type User from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';

const findUserBy = async (
  params: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  shouldThrowError = false,
) => {
  // prepare query?
  // ILike for strings?
  const data = await db.user.findOneBy(params);
  // queryBuilder for ILike (stringSearch)

  if (!data && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'User does not exist',
      data: params,
    });
  }

  return data;
};

export default findUserBy;
