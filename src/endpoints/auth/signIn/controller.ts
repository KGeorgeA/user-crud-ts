import { Request, Response } from 'express';
import authService from '../../../services/auth';
import logger from '../../../utils/logger';
import type { UserType } from '../../../utils/types';
// import createError, { createInternalServerError } from '../../../utils/createError';

const signIn = async (
  req: Request<unknown, unknown, Pick<UserType, 'email' | 'password'>>,
  res: Response,
) => {
  logger.info(req.body, `signInController, ${__filename}`);
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await authService.signIn(data);

    res.json({ token: 'TOOOOKEN', user });
  } catch (error) {
    logger.error(error, 'Error occure in signIn controller');
    // throw createInternalServerError();
  }
};

export default signIn;
