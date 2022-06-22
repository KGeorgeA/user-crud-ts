import { StatusCodes } from 'http-status-codes';
import findOneBy from '../../../services/userService/findOneBy';
import GetOneByPkControllerType from './getOneByPk.description';

const getOneByPk: GetOneByPkControllerType = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await findOneBy({ id: userId }, true, 'User does not exist');
    res
      .status(200)
      .json({
        data: {
          user,
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

export default getOneByPk;
