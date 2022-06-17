import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import logger from '../../../utils/logger';
import authService, { SignUpParamsType } from '../../../services/auth';
// import createError, { createInternalServerError } from '../../../utils/createError';

const signUp = async (
  req: Request<unknown, unknown, SignUpParamsType>,
  res: Response,
) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    const newUser = await authService.signUp(data);

    // if (!user) {
    //   logger.info('User already exist');
    //   res.status(StatusCodes.CONFLICT).json(`${ReasonPhrases.CONFLICT}. User already exist`);
    //   throw new Error('User already exist');
    // }

    res
      .status(StatusCodes.CREATED)
      .json({ token: 'TOOOKEN', newUser });
  } catch (error) {
    logger.error(error, 'Error occure in signUp controller');
    // throw createInternalServerError();
  }
};

export default signUp;
