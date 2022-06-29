import { StatusCodes } from 'http-status-codes';
import db, { UserEntity } from '../../db';
import CustomError from '../../utils/CustomError';
import { Directions } from '../../utils/types';

type ParamsType = {
  pagination: {
    page: number;
    perPage: number;
  },
  order: {
    sort?: keyof UserEntity;
    direction?: Directions;
  },
  filter: {
    roles?: 'admin' | 'user';
    searchString?: string;
  },
}

const findUsers = async (
  params: ParamsType,
  shouldThrowError = false,
) => {
  const filter = {
    skip: (params.pagination.page - 1) * params.pagination.perPage,
    take: params.pagination.perPage,
    order: {
      [params.order.sort]: params.order.direction,
    },
  };

  const [users, count] = await db.user.findAndCount(filter);

  if (!users.length && shouldThrowError) {
    throw new CustomError({
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Nothing could be found according to your request',
      data: null,
    });
  }

  return {
    users,
    count,
  };
};

export default findUsers;
