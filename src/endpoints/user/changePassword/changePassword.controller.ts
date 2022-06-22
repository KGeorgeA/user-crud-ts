import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import findOneBy from '../../../services/userService/findOneBy';
import updateFields from '../../../services/userService/updateFields';
import compareStrings from '../../../utils/compareStrings';
import CustomError from '../../../utils/CustomError';
import hashString from '../../../utils/hashString';
import type ChangePasswordControllerType from './changePassword.description';
// import userService from '../../../services/userService';
// import CustomError from '../../../utils/CustomError';

const changePassword: ChangePasswordControllerType = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const {
      oldPassword,
      password,
    } = req.body;

    if (userId !== req.user.id) {
      throw new CustomError({
        message: 'Who are u? very sus', // ???
        statusCode: StatusCodes.UNAUTHORIZED,
        data: null,
      });
    }

    const user = await findOneBy({ id: userId }, true, 'User does not exist');

    compareStrings(oldPassword, user.password, true, 'The old password is wrong');

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

    // phone/email confirm

    const updatedUser = await updateFields({ id: userId }, { password: hashString(password) });

    res
      .status(StatusCodes.CREATED)
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
