import { /* ReasonPhrases, */ StatusCodes } from 'http-status-codes';
import type { FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import db from '../../db';
import type { User } from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';
import findOneBy from './findOneBy';

const updateFields = async (
  findParams: FindOptionsWhere<User>,
  updatedParams: QueryDeepPartialEntity<User>,
  // shouldThrowError = false,
  // message = '',
) => {
  // TO-DO: need to make columns READONLY in User ENTITY
  await db.user.update(findParams, updatedParams)
    .catch((error) => {
      throw new CustomError({
        message: error.message,
        statusCode: StatusCodes.IM_A_TEAPOT, // TO-DO: change status
        data: {
          findParams,
          updatedParams,
        },
      });
    });

  const updatedUser = await findOneBy(findParams);

  return updatedUser;
};

export default updateFields;
