import express from 'express';
import authRouter from './auth.router';
import userRouter from './user.router';

const appRouter = express.Router();

appRouter.use(authRouter);
appRouter.use(userRouter);

export default appRouter;
