import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import CustomError from '../../../utils/CustomError';
import DeleteUserControllerType from './delete.description';

const deleteOne: DeleteUserControllerType = async (req, res, next) => {
  try {
    const { userId } = req.body;

    await userService.deleteUser(userId);

    res.json({
      data: {
        message: 'its seems that delete option was succeed',
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
export default deleteOne;
