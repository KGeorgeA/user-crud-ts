import { StatusCodes } from 'http-status-codes';
import type { FindOptionsWhere } from 'typeorm';
import type { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import db from '../../db';
import type User from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';
import findUserBy from './findUserBy';

const updateUserFields = async (
  findParams: FindOptionsWhere<User>,
  updatedParams: QueryDeepPartialEntity<User>,
) => {
  const updateResults = await db.user.update(findParams, updatedParams);

  if (!updateResults.affected) {
    throw new CustomError({
      message: 'Can not update user',
      statusCode: StatusCodes.BAD_REQUEST,
      data: null,
    });
  }

  const updatedUser = await findUserBy(findParams);

  return updatedUser;
};

export default updateUserFields;
