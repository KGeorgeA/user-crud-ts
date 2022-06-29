import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import CustomError from '../../../utils/CustomError';
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

    res.json({
      data: {
        list: data.users,
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
