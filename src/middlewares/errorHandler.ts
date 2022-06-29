/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ErrorRequestHandler } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CustomError, { CustomErrorPayload } from '../utils/CustomError';
import logger from '../utils/logger';

type ResponseBody<T> = Omit<CustomErrorPayload<T>, 'type'>;
export type ErrorHandlerType<T> = ErrorRequestHandler<unknown, ResponseBody<T>, unknown, unknown>

const errorHandler: ErrorHandlerType<unknown> = (err: CustomError<unknown>, req, res, next) => {
  logger.error(err?.name, 'name');
  logger.error(err.message, 'message');
  logger.error(err.stack, 'stack');

  if (!err.customPayload) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        message: `${ReasonPhrases.INTERNAL_SERVER_ERROR}\n${err.message ?? ''}`,
        data: null,
      });
  }

  logger.error('CustomPayload');
  logger.error(err.customPayload.message, 'message');
  logger.error(err.customPayload.statusCode, 'code');
  logger.error(err.customPayload.data, 'data');

  res
    .status(err.customPayload.statusCode)
    .json({
      statusCode: err.customPayload.statusCode,
      message: err.customPayload.message,
      data: err.customPayload.data,
    });
};

export default errorHandler;
