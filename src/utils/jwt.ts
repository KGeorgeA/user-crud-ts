import jwt from 'jsonwebtoken';
import type { SignOptions } from 'jsonwebtoken';
import config from '../config';

// TO-DO: type payload
export const signJwt = (
  payload: object,
  key: 'accessTokenKey' | 'refreshTokenKey',
  options?: SignOptions | undefined,
) => {
  return jwt.sign(payload, config.secrets[key], {
    ...options,
    algorithm: 'RS512',
  });
};

// TO-DO: refactor
export const verifyJwt = (token, key) => {
  try {
    const decoded = jwt.verify(token, key);
    return decoded;
  } catch (error) {
    return 'expired';
  }
};
