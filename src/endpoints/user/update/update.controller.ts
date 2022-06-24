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
      // age: req.body.age,
      // DoB: req.body.DoB,
    };

    // "if admin then ok" middleware?)))
    if (+userId !== req.user.id) {
      throw new CustomError({
        message: 'Who are u? very sus', // ???
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
      error.customPayload = {
        message: error.message,
        data: null,
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      };
    }

    next(error);
  }
};

export default updateUserInfo;
