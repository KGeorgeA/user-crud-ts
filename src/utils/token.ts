import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import config from '../config';
import CustomError from './CustomError';

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

const verify = (
  token: string,
  key: 'accessTokenKey' | 'refreshTokenKey',
  shouldThrowError = false,
): Promise<TokenPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      config.secrets.token[key].key,
      { algorithms: ['HS256'] },
      (error, decoded: TokenPayload) => {
        if (error) {
          if (!shouldThrowError) {
            reject(error);
          }

          throw new CustomError({
            statusCode: StatusCodes.UNAUTHORIZED,
            message: error.message,
            data: null,
          });
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
