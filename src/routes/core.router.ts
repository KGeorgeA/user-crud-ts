import type { Express } from 'express';
import userRouter from './user.router';

export default (app: Express) => {
  // return app.use(userRouter);
  // const router = () => { };
  // app.use(`/api/${router}`, router);
};