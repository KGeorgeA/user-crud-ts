import { StatusCodes } from 'http-status-codes';
import db from '../../../db';
import logger from '../../../utils/logger';
import authService from '../../../services/authService/auth';
import CustomError from '../../../utils/CustomError';
import type SignUpControllerType from './signUp.description';

const signUp: SignUpControllerType = async (
  req,
  res,
  next,
) => {
  try {
    const requestData = {
      email: req.body.email,
      password: req.body.password,
    };

    const newUser = await authService.signUp(requestData);

    // if (!user) {
    //   logger.info('User already exist');
    //   res.status(StatusCodes.CONFLICT).json(`${ReasonPhrases.CONFLICT}. User already exist`);
    //   throw new Error('User already exist');
    // }

    res
      .status(StatusCodes.CREATED)
      .json({
        data: {
          token: 'TOOOKEN',
          newUser,
        },
      });
  } catch (error) {
    logger.error(error, 'Error occure in signUp controller');
    next(error);
    // throw createInternalServerError();
  }
};

export default signUp;
