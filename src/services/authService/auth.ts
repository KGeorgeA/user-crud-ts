import db from '../../db';
import type { User } from '../../db/entities/User.entity';
import checkIfEmailTaken from '../checkIfEmailTaken';

export type SignInParamsType = {
  email: string;
  password: string;
};
const signIn = async (params: SignInParamsType): Promise<User> => {
  const data = await db.user.findOneBy({ email: params.email });

  return data;
};

export type SignUpParamsType = {
  email: string;
  password: string;
};
const signUp = async (params: SignUpParamsType): Promise<User> => {
  const isEmailExist = await checkIfEmailTaken(params.email);

  const data = await db.user.findOneBy({ email: params.email });

  return data;
};

export default {
  signUp,
  signIn,
};
