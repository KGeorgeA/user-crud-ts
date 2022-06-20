import type SignInControllerType from '../signIn/signIn.description';
import authService from '../../../services/authService/auth';
import logger from '../../../utils/logger';
// import createError, { createInternalServerError } from '../../../utils/createError';

const signIn: SignInControllerType = async (
  req,
  res,
) => {
  logger.info(req.body, `signInController, ${__filename}`);
  try {
    const requestData = {
      email: req.body.email,
      password: req.body.password,
    };

    const user = await authService.signIn(requestData);

    res.json({ data: { token: 'TOOOOKEN', user } });
  } catch (error) {
    logger.error(error, 'Error occure in signIn controller');
    // throw createInternalServerError();
  }
};

export default signIn;
