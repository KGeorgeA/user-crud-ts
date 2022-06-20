import type { RequestHandler } from 'express';
import token from 'src/utils/token';

const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    const tokenString = (req.headers.authorization || '').replace(/^Bearer /, '');
    const id = token.verify(tokenString);
  } catch (error) {
    //
  }
};

export default checkAuth;
