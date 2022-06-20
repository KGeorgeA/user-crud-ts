import { ReasonPhrases, StatusCodes } from 'http-status-codes';

type CustomPayload<T> = {
  statusCode: StatusCodes;
  message: ReasonPhrases | string;
  data: T | null;
}

class CustomError<T> extends Error {
  customPayload: CustomPayload<T>;

  constructor(payload: CustomPayload<T>, nativeErrorMessage = 'CustomError message') {
    super(nativeErrorMessage);
    this.customPayload = payload;
  }
}

export const createInternalServerError = <T = null>(
  data: T = null,
) => {
  return new CustomError<T>({
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    data,
  });
};

export default CustomError;
