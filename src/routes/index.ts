import express from 'express';
import authRouter from './auth';
import userRouter from './user';

const appRouter = express.Router();

appRouter.use(authRouter);
appRouter.use(userRouter);

export default appRouter;
