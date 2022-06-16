// import usersService from 'src/db/services/users';
import { Request, Response } from 'express';
import logger from 'src/logger';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { UserType } from 'src/utils/types';

const createUser = async (
  req: Request<unknown, unknown, Omit<UserType, 'id'>>,
  res: Response,
) => {
  try {
    const data = {
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      DoB: req.body.DoB,
      email: req.body.email,
      phone: req.body.phone,
      age: req.body.age,
      isMale: req.body.isMale,
    };

    // const newUser = false;// await usersService.signUp(data);

    // if (!user) {
    //   logger.info('User already exist');
    //   res.status(StatusCodes.CONFLICT).json(`${ReasonPhrases.CONFLICT}. User already exist`);
    //   throw new Error('User already exist');
    // }

    res
      .status(StatusCodes.CREATED)
      // json have to return token and user itself
      .json({ message: ReasonPhrases.CREATED, data });
  } catch (error) {
    logger.error(error, 'Error occure in createUser controller');
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

export default createUser;
