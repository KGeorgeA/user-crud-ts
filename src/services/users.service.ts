// TO-DO: uncomment when done with db connection
// import USER_MODEL from '../models/User';
// import { StatusCodes } from 'http-status-codes';
import logger from 'src/utils';
// import createError, { createInternalServerError } from 'src/utils/createError';

// this crap is done as well
const getOneByPk = async (id: number) => {
  logger.info(id, 'getOneByPk, got id -> ');
  try {
    // const user = await USER_MODEL.findOneBy(id);

    // if (!user) {
    //   throw createError('', { code: StatusCodes.NOT_FOUND });
    // }
    // return user;
    return { id: 2 };
  } catch (error) {
    // throw createInternalServerError();
  }
};

type GetAllType = {
  [key: string]: unknown;
};
const getAll = async (params: GetAllType) => {
  logger.info(params, 'getAll, got params -> ');
  /*
    may be query builder logic
  */
  try {
    // const users = await USER_MODEL.findAll(query);
    // return users;
  } catch (error) {
    // throw createInternalServerError();
  }
};

export default {
  getOneByPk,
  getAll,
};
