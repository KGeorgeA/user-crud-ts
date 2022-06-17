import express from 'express';
import signIn from '../endpoints/auth/signIn/controller';
import signUp from '../endpoints/auth/signUp/controller';

const authRouter = express.Router();

authRouter.post('/api/auth/sign-in', signIn);
authRouter.post('/api/auth/sign-up', signUp);

export default authRouter;
