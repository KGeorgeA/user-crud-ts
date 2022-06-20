import express from 'express';
import changePassword from '../endpoints/user/changePassword/changePassword.controller';
import getUsersList from '../endpoints/user/getList/controller';
import getOneByPk from '../endpoints/user/getOneByPk/controller';
import updateUserInfo from '../endpoints/user/update/controller';

const userRouter = express.Router();

userRouter.get('/', getUsersList);
userRouter.get('/:userId', getOneByPk);
userRouter.patch('/change-password/:userId', changePassword);
userRouter.patch('/update/:userId', updateUserInfo);

export default userRouter;
