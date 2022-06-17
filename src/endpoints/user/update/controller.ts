import type { Request, Response } from 'express';
// import userService from '../../../services/user';
import logger from '../../../utils/logger';

const updateUserInfo = async (req: Request, res: Response) => {
  logger.info(req.params, 'updateUserInfo params');
  try {
    // const { id } = req.params;

    // const newData = {
    // some data
    // };

    // const data = await userService.updatePassword(newData);

    // res.json(data);
  } catch (error) {
    // typical error throw?
  }
};

export default updateUserInfo;
