import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';
import config from '../config';

type TokenPayload = { userId: number; }

export const sign = (
  userId: number,
  key: 'accessTokenKey' | 'refreshTokenKey',
  options?: SignOptions,
) => {
  const a = jwt.sign({ userId }, config.secrets[key].key, { algorithm: 'RS512', expiresIn: config.secrets[key].expiresIn });
  // return jwt.sign({ userId }, config.secrets[key], {
  //   ...options,
  //   algorithm: 'RS512',
  // });
};

// export const verify = (token, key): Promise<TokenPayload> => {
export const verify = (token, key) => {
  // return jwt.verify(token, key, (err, payload) => {
  //   //
  // });
};

export default {
  sign,
  verify,
};
