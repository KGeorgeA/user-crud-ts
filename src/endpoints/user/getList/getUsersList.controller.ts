import { StatusCodes } from 'http-status-codes';
import { UserEntity } from '../../../db';
import userService from '../../../services/userService';
import CustomError from '../../../utils/CustomError';
import excludeFields from '../../../utils/excludeFields';
import type GetUsersListControllerType from './getUsersList.description';

const getUsersList: GetUsersListControllerType = async (req, res, next) => {
  try {
    const options = {
      pagination: {
        page: +req.query.page || 1,
        perPage: +req.query.perPage || 10,
      },
      order: {
        sort: req.query.sort,
        direction: req.query.direction,
      },
      filter: {},
    };

    const data = await userService.findUsers(options);

    // legal cheats?
    const filteredList = excludeFields(data.users as unknown as Record<string, unknown>[], 'password');

    res.json({
      data: {
        // legal cheats?
        list: filteredList as Omit<UserEntity, 'password'>[],
        total: data.count,
      },
    });
  } catch (error) {
    if (error.message !== 'CustomError') {
      next(
        new CustomError({
          message: error.message,
          data: null,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        }),
      );
    }
    next(error);
  }
};

export default getUsersList;
