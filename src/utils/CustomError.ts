import { ReasonPhrases, StatusCodes } from 'http-status-codes';

type CustomPayload<T> = {
  statusCode: StatusCodes;
  message: ReasonPhrases | string;
  data: T | null;
  type?: 'internal';
}

class CustomError<T> extends Error {
  customPayload: CustomPayload<T>;

  constructor(payload: CustomPayload<T>, nativeErrorMessage = 'CustomError') {
    super(nativeErrorMessage);
    this.customPayload = payload;
  }
}

export const createInternalServerError = <T = null>(
  message?: string,
  data: T = null,
) => {
  return new CustomError<T>({
    message: `${ReasonPhrases.INTERNAL_SERVER_ERROR}\n${message ?? ''}`,
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    data,
    type: 'internal',
  });
};

export default CustomError;
