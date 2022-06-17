import type { Request, Response } from 'express';
// import userService from '../../../services/user';
import logger from '../../../utils/logger';

const changePassword = async (req: Request, res: Response) => {
  logger.info(req.params, 'changePassword params');
  try {
    // const { id } = req.params;

    // const newData = {
    // oldPassword: req.body.oldPassword,
    // password: req.body.password,
    // };

    // compare logic (hash compare?) funcBlaBla(id?, newData) -> return hashedPassword or smth else;
    // if identical throw error

    // phone/email confirm

    // const data = await userService.updatePassword(hashedPassword);

    // res.json(data);
  } catch (error) {
    // typical error throw?
  }
};

export default changePassword;
