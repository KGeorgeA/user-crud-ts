import express from 'express';
import usersController from 'src/controllers/users/users.controller';

const userRouter = express.Router();

userRouter.get('/api/users', usersController.getAll);
userRouter.get('/api/users/:userId', usersController.getOneByPk);

export default userRouter;
