import { StatusCodes } from 'http-status-codes';
import type SignInControllerType from '../signIn/signIn.description';
import authService from '../../../services/authService/auth';
import logger from '../../../utils/logger';
import token from '../../../utils/token';
import CustomError, { createInternalServerError } from '../../../utils/CustomError';

const signIn: SignInControllerType = async (
  req,
  res,
  next,
) => {
  try {
    const requestData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await authService.signIn(requestData);
    if (!user) {
      throw new CustomError<{
        email: string;
        password: string;
      }>({
        data: requestData,
        message: 'User does not exist',
        statusCode: StatusCodes.UNAUTHORIZED,
      });
    }
    const userToken = token.sign(user.id);

    res.json({ data: { token: userToken, user } });
  } catch (error) {
    if (error.message === 'CustomError') {
      return next(error.customPayload);
    }

    // throw createInternalServerError('Can not sign you try again.');
  }
};

export default signIn;
