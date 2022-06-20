import express from 'express';
import authRouter from './auth';
import userRouter from './user';

const appRouter = express.Router();

appRouter.use('/auth', authRouter);
appRouter.use('/users', userRouter);

export default appRouter;
