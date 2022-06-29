import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import CustomError from '../../../utils/CustomError';
import type GetOneByPkControllerType from './getOneByPk.description';

const getOneByPk: GetOneByPkControllerType = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await userService.findUserBy({ id: +userId }, true);

    res
      .status(200)
      .json({
        data: {
          user,
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

export default getOneByPk;
