import { Handler } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import CustomError from '../utils/CustomError';

// TO-DO: schema should be typed
const validator = (schema: unknown): Handler => {
  return async (req, res, next) => {
    try {
      const errors = [];

      await Promise.all(Object.entries(schema).map(async ([key, value]) => {
        await yup
          .object()
          .shape(value)
          .noUnknown(true, 'Unexpected field')
          .validate(req[key], { abortEarly: false, strict: true })
          .catch((err) => {
            err.inner.forEach((error) => {
              errors.push({
                path: error.type === 'noUnknown' ? error.params.unknown.replace(', ', ' | ') : error.path,
                message: error.message,
              });
            });
          });
      }));

      if (errors.length) {
        throw new CustomError({
          message: 'Validation error',
          statusCode: StatusCodes.BAD_REQUEST,
          data: errors,
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validator;
