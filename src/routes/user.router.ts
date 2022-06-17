import express from 'express';
import changePassword from '../endpoints/user/changePassword/controller';
import getUsersList from '../endpoints/user/getList/controller';
import getOneByPk from '../endpoints/user/getOneByPk/controller';
import updateUserInfo from '../endpoints/user/update/controller';

const userRouter = express.Router();

userRouter.get('/api/users', getUsersList);
userRouter.get('/api/users/:userId', getOneByPk);
userRouter.patch('/api/users/change-password/:userId', changePassword);
userRouter.patch('/api/users/update/:userId', updateUserInfo);

export default userRouter;
