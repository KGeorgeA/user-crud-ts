import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import DeleteUserControllerType from './delete.description';

const deleteOne: DeleteUserControllerType = async (req, res, next) => {
  try {
    const { userId } = req.body;

    const deletedUser = await userService.findUserBy({ id: userId }, true, 'User does not exist');

    await userService.deleteUser(userId);

    res.json({
      data: {
        deletedUser,
        message: 'its seems that delete option was succeed',
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
export default deleteOne;
