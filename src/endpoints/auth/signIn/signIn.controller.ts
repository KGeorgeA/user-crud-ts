import { StatusCodes } from 'http-status-codes';
import userService from '../../../services/userService';
import compareStrings from '../../../utils/compareStrings';
import CustomError from '../../../utils/CustomError';
import token from '../../../utils/token';
import type SignInControllerType from '../signIn/signIn.description';

const signIn: SignInControllerType = async (
  req,
  res,
  next,
) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const user = await userService.findUserBy({ email }, true);

    compareStrings(password, user.password, true, 'Passwords do not match');

    res.json({
      data: {
        token: token.sign(user.id),
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

export default signIn;
