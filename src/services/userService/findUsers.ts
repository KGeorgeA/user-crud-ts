import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { FindManyOptions } from 'typeorm';
import db from '../../db';
import type User from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';

const findUsers = async (
  // TO-DO: type for builder but not for find method e.g. params: FilterType
  params?: FindManyOptions<User>,
  shouldThrowError = false,
  message = '',
) => {
  // prepare query?
  const data = await db.user.findAndCount(params);
  // queryBuilder for ILike (stringSearch)

  if (!data && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.NOT_FOUND,
      message: `${ReasonPhrases.NOT_FOUND}\n${message ?? ''}`,
      data: params,
    });
  }

  return data;
};

export default findUsers;
