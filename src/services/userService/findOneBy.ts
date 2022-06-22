import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { FindOptionsWhere } from 'typeorm';
import db from '../../db';
import type { User } from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';

const findOneBy = async (
  params: FindOptionsWhere<User> | FindOptionsWhere<User>[],
  shouldThrowError = false,
  message = '',
) => {
  // ILike for strings?
  const data = await db.user.findOneBy(params);

  if (!data && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.NOT_FOUND,
      message: `${ReasonPhrases.NOT_FOUND}\n${message ?? ''}`,
      data: params,
    });
  }

  return data;
};

export default findOneBy;
