import jwt from 'jsonwebtoken';
import config from '../config';

type TokenPayload = { userId: number; }

const generateToken = (
  userId: number,
  key: 'accessTokenKey' | 'refreshTokenKey',
) => {
  return jwt.sign(
    { userId },
    config.secrets.token[key].key,
    {
      algorithm: 'HS256',
      expiresIn: config.secrets.token[key].expiresIn,
    },
  );
};

const sign = (userId: number) => ({
  access: generateToken(userId, 'accessTokenKey'),
  refresh: generateToken(userId, 'refreshTokenKey'),
});

const verify = (token: string, key: 'accessTokenKey' | 'refreshTokenKey'): Promise<TokenPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.secrets.token[key].key,
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
  generateToken,
  sign,
  verify,
};
