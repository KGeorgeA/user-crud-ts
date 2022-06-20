// import { StatusCodes } from 'http-status-codes';
import type ChangePasswordControllerType from './changePassword.description';
// import userService from '../../../services/user';
import CustomError from '../../../utils/CustomError';
import logger from '../../../utils/logger';

const changePassword: ChangePasswordControllerType = async (req, res) => {
  logger.info(req.params, 'changePassword params');
  try {
    // const { id } = req.params;

    // const requestData = {
    //   oldPassword: req.body.oldPassword,
    //   password: req.body.password,
    // };

    /*
      compare logic (hash compare?)
      funcBlaBla(id?, requestData) -> return hashedPassword or smth else;
    */
    // if identical throw error

    // phone/email confirm

    // await userService.updatePassword(hashedPassword);

    // res.status(StatusCodes.CREATED);
  } catch (error) {
    // throw new CustomError({});
  }
};

export default changePassword;
