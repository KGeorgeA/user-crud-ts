import type { ErrorRequestHandler } from 'express';
import CustomError from './CustomError';
import logger from './logger';

//                                               unknown for now?
const errorHandler: ErrorRequestHandler = (err: CustomError<unknown>, req, res, next) => {
  logger.error(err);
  res.status(err.customPayload.statusCode).json({
    status: err.customPayload.statusCode,
    message: err.customPayload.message,
    data: err.customPayload.data,
  });
};

export default errorHandler;
