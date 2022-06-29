import { StatusCodes } from 'http-status-codes';
import type { DeepPartial } from 'typeorm';
import db, { UserEntity } from '../../db';
import CustomError from '../../utils/CustomError';

const createUser = async (userParams: DeepPartial<UserEntity>, shouldThrowError = false) => {
  const userInstance = db.user.create(userParams);

  const newUser = await db.user.save(userInstance);

  if (!newUser && shouldThrowError) {
    throw new CustomError({
      message: 'Can not create user',
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      data: null,
    });
  }

  return newUser;
};

export default createUser;
