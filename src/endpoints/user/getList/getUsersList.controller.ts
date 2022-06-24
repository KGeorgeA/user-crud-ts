import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import type GetUsersListControllerType from './getUsersList.description';

const getUsersList: GetUsersListControllerType = async (req, res, next) => {
  try {
    const filter = {
      page: +req.body.page,
      perPage: +req.body.perPage,
      // sortBy: req.body.sortBy,
      search: req.body.search,
      where: req.body.where,
    };

    /*
      Prepare Filter Logic?
    */

    const data = await userService.findUsers({
      take: filter.perPage,
      skip: (filter.page - 1) * filter.perPage,
      // order: filter.sortBy,
      where: filter.where,
    });
    res.json({
      data: {
        list: data[0],
        total: data[1],
      },
    });
  } catch (error) {
    if (error.message !== 'CustomError') {
      error.customPayload = {
        message: error.message,
        data: null,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }

    next(error);
  }
};

export default getUsersList;
