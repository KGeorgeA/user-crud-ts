import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import userService from '../../../services/userService';
import compareStrings from '../../../utils/compareStrings';
import CustomError from '../../../utils/CustomError';
import hashString from '../../../utils/hashString';
import type ChangePasswordControllerType from './changePassword.description';

const changePassword: ChangePasswordControllerType = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const {
      oldPassword,
      password,
    } = req.body;

    if (+userId !== req.user.id) {
      throw new CustomError({
        message: 'Who are u? very sus', // ???
        statusCode: StatusCodes.FORBIDDEN,
        data: null,
      });
    }

    if (!oldPassword || !password) {
      throw new CustomError({
        message: 'Some Fields are empty',
        statusCode: StatusCodes.BAD_REQUEST,
        data: {
          oldPassword,
          password,
        },
      });
    }

    if (compareStrings(oldPassword, password)) {
      throw new CustomError({
        message: `${ReasonPhrases.BAD_REQUEST}\nThe new password matches the old one`,
        statusCode: StatusCodes.BAD_REQUEST,
        data: {
          oldPassword,
          password,
        },
      });
    }

    const user = await userService.findUserBy({ id: +userId }, true, 'User does not exist');

    compareStrings(oldPassword, user.password, true, 'The old password is wrong');

    // phone/email confirm

    const updatedUser = await userService.updateUserFields(
      { id: +userId },
      { password: hashString(password) },
    );

    res
      .status(StatusCodes.IM_A_TEAPOT) // 200?
      .json({
        data: {
          user: updatedUser,
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

export default changePassword;
