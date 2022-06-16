import { ReasonPhrases, StatusCodes } from 'http-status-codes';

type CreateErrorParamsType = {
  code?: StatusCodes;
};

type CreateErrorType = (message: string, params: CreateErrorParamsType) => ErrorType;

type ErrorType = {
  message: string;
  code?: StatusCodes;
  type?: 'custom';
};

const createError: CreateErrorType = (message, params = {}) => {
  const error: ErrorType = { message };

  Object.keys(params).forEach((key) => {
    error[key] = params[key];
  });

  error.code = params.code || StatusCodes.BAD_REQUEST;
  error.type = 'custom';

  return error;
};

export const createInternalServerError = (
  message: string = ReasonPhrases.INTERNAL_SERVER_ERROR,
) => {
  const error = { message, code: StatusCodes.INTERNAL_SERVER_ERROR };
  return error;
};

export default createError;
