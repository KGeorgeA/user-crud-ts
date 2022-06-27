import express from 'express';
import changePassword from '../endpoints/user/changePassword/changePassword.controller';
import changePasswordValidationSchema from '../endpoints/user/changePassword/changePassword.validationSchema';
import deleteOne from '../endpoints/user/delete/delete.controller';
import deleteValidationSchema from '../endpoints/user/delete/delete.validationSchema';
import getUsersList from '../endpoints/user/getList/getUsersList.controller';
import getUsersListValidationSchema from '../endpoints/user/getList/getUsersList.validationSchema';
import getOneByPk from '../endpoints/user/getOneByPk/getOneByPk.controller';
import getOneByPkValidationSchema from '../endpoints/user/getOneByPk/getOneByPk.validationSchema';
import updateUserInfo from '../endpoints/user/update/update.controller';
import updateValidationSchema from '../endpoints/user/update/update.validationSchema';
import checkAuth from '../middlewares/checkAuth';
import validator from '../middlewares/validator';

const userRouter = express.Router();

userRouter.get('/', validator(getUsersListValidationSchema), getUsersList);
userRouter.get('/:userId', checkAuth, validator(getOneByPkValidationSchema), getOneByPk);
userRouter.patch('/change-password/:userId', checkAuth, validator(changePasswordValidationSchema), changePassword);
userRouter.patch('/update/:userId', checkAuth, validator(updateValidationSchema), updateUserInfo);
userRouter.delete('/delete', /* only admin middleware */ validator(deleteValidationSchema), deleteOne);

export default userRouter;
