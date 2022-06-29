import { StatusCodes } from 'http-status-codes';
import token from '../../../utils/token';
import type SignUpControllerType from './signUp.description';
import userService from '../../../services/userService';
import hashString from '../../../utils/hashString';
import CustomError from '../../../utils/CustomError';

const signUp: SignUpControllerType = async (
  req,
  res,
  next,
) => {
  try {
    const {
      email,
      password,
    } = req.body;

    await userService.checkIfEmailTaken(email, true);

    const newUser = await userService.createUser(
      {
        email,
        password: hashString(password),
      },
      true,
    );

    res
      .status(StatusCodes.CREATED)
      .json({
        data: {
          token: token.sign(newUser.id),
          newUser,
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

export default signUp;
