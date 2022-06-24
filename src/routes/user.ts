import express from 'express';
import changePassword from '../endpoints/user/changePassword/changePassword.controller';
import deleteOne from '../endpoints/user/delete/delete.controller';
import getUsersList from '../endpoints/user/getList/getUsersList.controller';
import getOneByPk from '../endpoints/user/getOneByPk/getOneByPk.controller';
import updateUserInfo from '../endpoints/user/update/update.controller';
import checkAuth from '../middlewares/checkAuth';

const userRouter = express.Router();

userRouter.get('/', getUsersList);
userRouter.get('/:userId', checkAuth, getOneByPk);
userRouter.patch('/change-password/:userId', checkAuth, changePassword);
userRouter.patch('/update/:userId', checkAuth, updateUserInfo);
userRouter.delete('/delete', /* only admin middleware */ deleteOne);

export default userRouter;
