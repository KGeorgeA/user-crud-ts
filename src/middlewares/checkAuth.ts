import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import findUserBy from '../services/userService/findUserBy';
import CustomError from '../utils/CustomError';
import token from '../utils/token';

const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    const tokenString = (req.headers.authorization || '').replace(/^Bearer /, '');
    const { userId } = await token.verify(tokenString, 'accessTokenKey', true);

    const user = await findUserBy({ id: userId }, true);

    req.user = user;

    next();
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

export default checkAuth;
