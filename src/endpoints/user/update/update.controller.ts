import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import CustomError from '../../../utils/CustomError';
import type UpdateControllerType from './update.description';

const updateUserInfo: UpdateControllerType = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const newData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      gender: req.body.gender,
      role: req.body.role,
    };

    if (+userId !== req.user.id) {
      throw new CustomError({
        message: 'You have no access for that',
        statusCode: StatusCodes.FORBIDDEN,
        data: null,
      });
    }

    const data = await userService.updateUserFields({ id: +userId }, newData);

    res.json({
      data: {
        updatedUser: data,
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

export default updateUserInfo;
