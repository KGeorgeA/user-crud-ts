import type { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import CustomError, { createInternalServerError } from 'src/utils/CustomError';
// import { StatusCodes } from 'http-status-codes';
// import token from 'src/utils/token';

const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    // const tokenString = (req.headers.authorization || '').replace(/^Bearer /, '');
    // const { userId } = await token.verify(tokenString, 'accessTokenKey');

    // const user = await db.entities.repo.findByPk(userId);

    // if (!user) {
    //   res.status(StatusCodes.UNAUTHORIZED).json('User not found');
    // }

    // req.user = user;

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      throw new CustomError<null>({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: 'Token is expired',
        data: null,
      }, error.message);
    }

    if (error.name === 'JsonWebTokenError') {
      throw new CustomError<null>({
        statusCode: StatusCodes.UNAUTHORIZED,
        message: 'Token is invalid',
        data: null,
      }, error.message);
    }

    throw createInternalServerError();
  }
};

export default checkAuth;
