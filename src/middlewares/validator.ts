import { Request, Response, NextFunction } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

const validator = (schema: unknown) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const keys = Object.keys(schema);

      // eslint-disable-next-line guard-for-in
      for (const key in keys) {
        // eslint-disable-next-line no-await-in-loop
        await yup
          .object()
          .shape(schema[keys[key]])
          .validate(req[keys[key]], { abortEarly: false });
      }

      next();
    } catch (error) {
      if (error.name === 'ValidationError') {
        error.customPayload = {
          message: 'Validation error',
          statusCode: StatusCodes.BAD_REQUEST,
          data: error.errors,
        };
      }

      if (error.message !== 'CustomError' && error.name !== 'ValidationError') {
        error.customPayload = {
          message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
          data: null,
        };
      }

      next(error);
    }
  };
};

export default validator;
