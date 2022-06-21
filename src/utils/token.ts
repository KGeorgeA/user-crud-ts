import jwt from 'jsonwebtoken';
import config from '../config';

type TokenPayload = { userId: number; }

export const sign = (
  userId: number,
  key: 'accessTokenKey' | 'refreshTokenKey',
) => {
  return jwt.sign(
    { userId },
    config.secrets[key].key,
    {
      algorithm: 'HS256',
      expiresIn: config.secrets[key].expiresIn,
    },
  );
};

export const verify = (token: string, key: 'accessTokenKey' | 'refreshTokenKey'): Promise<TokenPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.secrets[key].key,
      { algorithms: ['HS256'] },
      (error, decoded: TokenPayload) => {
        if (error) {
          return reject(error);
        }

        resolve(decoded);
      },
    );
  });
};

export default {
  sign,
  verify,
};
