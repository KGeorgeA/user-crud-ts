import checkIfEmailTaken from './checkIfEmailTaken';
import findOneBy from './findOneBy';
import createUser from './createUser';

export default {
  checkIfEmailTaken,
  findOneBy,
  createUser,
};

//
// // import USER_MODEL from '../models/User';
// import logger from '../../utils/logger';
// // import { StatusCodes } from 'http-status-codes';
// // import createError, { createInternalServerError } from '../utils/createError';

// const updatePassword = async (params) => {
//   logger.info(params, 'updatePassword, got params ->');
//   return { worldAnswer: 42 };
// };

// const updateUserInfo = async (params) => {
//   logger.info(params, 'updateUserInfo, got params -> ');
//   return { worldAnswer: 42 };
// };

// const getOneByPk = async (id: number) => {
//   logger.info(id, 'getOneByPk, got id -> ');
//   try {
//     // const user = await USER_MODEL.findOneBy(id);

//     // if (!user) {
//     //   throw createError();
//     // }
//     // return user;
//     return { worldAnswer: 42 };
//   } catch (error) {
//     // throw createInternalServerError();
//   }
// };

// type GetAllType = {
//   [key: string]: unknown;
// };
// const getAll = async (params: GetAllType) => {
//   logger.info(params, 'getAll, got params -> ');
//   /*
//     may be query builder logic
//   */
//   try {
//     // const users = await USER_MODEL.findAll(query);
//     // return users;
//   } catch (error) {
//     // throw createInternalServerError();
//   }
// };

// export default {
//   getOneByPk,
//   getAll,
//   updatePassword,
//   updateUserInfo,
// };
