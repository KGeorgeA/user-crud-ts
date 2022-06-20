import type { StatusCodes } from 'http-status-codes';

type CustomPayload<T> = {
  statusCode: StatusCodes;
  message: string;
  data: T | null;
}

class ErrorHandler<T> extends Error {
  customPayload: CustomPayload<T>;

  constructor(payload: CustomPayload<T>) {
    super('Custom error');
    this.customPayload = payload;
  }
}

export default ErrorHandler;
