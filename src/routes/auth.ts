import express from 'express';
import signIn from '../endpoints/auth/signIn/signIn.controller';
import signUp from '../endpoints/auth/signUp/signUp.controller';

const authRouter = express.Router();

authRouter.post('/sign-in', signIn);
authRouter.post('/sign-up', signUp);

export default authRouter;
