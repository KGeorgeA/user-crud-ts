import express from 'express';
import signIn from '../endpoints/auth/signIn/signIn.controller';
import signInValidationSchema from '../endpoints/auth/signIn/signIn.validationSchema';
import signUp from '../endpoints/auth/signUp/signUp.controller';
import signUpValidationSchema from '../endpoints/auth/signUp/signUp.validationSchema';
import validator from '../middlewares/validator';

const authRouter = express.Router();

authRouter.post('/sign-in', validator(signInValidationSchema), signIn);
authRouter.post('/sign-up', validator(signUpValidationSchema), signUp);

export default authRouter;
