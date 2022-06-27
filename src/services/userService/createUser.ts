import { StatusCodes } from 'http-status-codes';
import type { DeepPartial } from 'typeorm';
import db from '../../db';
import User from '../../db/entities/User.entity';
import CustomError from '../../utils/CustomError';

const createUser = async (userParams: DeepPartial<User>, shouldThrowError = false) => {
  const userInstance = db.user.create(userParams);

  const newUser = await db.user.save(userInstance);

  if (!newUser && shouldThrowError) {
    throw new CustomError({
      message: 'Can not create user',
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: userParams,
    });
  }

  return newUser;
};

export default createUser;
