import { StatusCodes } from 'http-status-codes';
import token from '../../../utils/token';
import type SignUpControllerType from './signUp.description';
import userService from '../../../services/userService';
import hashString from '../../../utils/hashString';
// import CustomError from '../../../utils/CustomError';

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

    await userService.checkIfEmailTaken(email, true, 'Email already in use');

    const newUser = await userService.createUser(
      {
        email,
        password: hashString(password),
      },
      true,
      'Can not create user.',
    );

    const newUserTokenPair = token.sign(newUser.id);

    res
      .status(StatusCodes.CREATED)
      .json({
        data: {
          token: newUserTokenPair,
          newUser,
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

export default signUp;
