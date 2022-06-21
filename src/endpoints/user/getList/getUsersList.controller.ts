// import userService from '../../../services/user';
import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
import logger from '../../../utils/logger';
// import createError from '../../../utils/createError';

const getUsersList = async (req: Request, res: Response) => {
  try {
    // const filter = {
    //   // page: req.query.page,
    //   // perPage: req.query.perPage,
    //   // sortBy: req.query.sortBy,
    //   // sortDirection: req.query.sortDirection,
    //   search: req.query.search,
    //   isMale: req.query.isMale,
    //   age: req.query.age,
    //   // etc
    // };

    /*
      Prepare Filter Logic
    */

    // const data = await userService.getAll(filter);
    // res.status(StatusCodes.OK).json(data);
    logger.info(req.query, 'getUsersList');
    res.json(req.query);
  } catch (error) {
    //
    logger.error(error, `${__filename}, error`);
  }
};

export default getUsersList;
