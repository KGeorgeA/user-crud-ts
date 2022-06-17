import authService from 'src/services/auth.service';
import { Request, Response } from 'express';
import logger from 'src/utils';
import { UserType } from 'src/utils/types';
// import createError, { createInternalServerError } from 'src/utils/createError';

const signIn = async (
  req: Request<unknown, unknown, Pick<UserType, 'email' | 'password'>>,
  res: Response,
) => {
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
