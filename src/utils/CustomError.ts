import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export type CustomErrorPayload<T> = {
  statusCode: StatusCodes;
  message: ReasonPhrases | string;
  data: T | null;
  path?: string;
}

class CustomError<T> extends Error {
  customPayload: CustomErrorPayload<T>;

  constructor(payload: CustomErrorPayload<T>, nativeErrorMessage = 'CustomError') {
    super(nativeErrorMessage);
    this.customPayload = payload;
  }
}

export default CustomError;
