/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ErrorRequestHandler } from 'express';
import CustomError, { CustomErrorPayload } from './CustomError';

type ResponseBody<T> = Omit<CustomErrorPayload<T>, 'type'>;
export type ErrorHandlerType<T> = ErrorRequestHandler<unknown, ResponseBody<T>, unknown, unknown>

const errorHandler: ErrorHandlerType<unknown> = (err: CustomError<unknown>, req, res, next) => {
  res
    .status(err.customPayload.statusCode)
    .json({
      statusCode: err.customPayload.statusCode,
      message: err.customPayload.message,
      data: err.customPayload.data,
    });
};

export default errorHandler;
