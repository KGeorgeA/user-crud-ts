import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import CustomError from './CustomError';
import hashString from './hashString';

const compareStrings = (str: string, str2: string, shouldThrowError = false, message = '') => {
  const isMatch = hashString(str.trim()) === str2.trim();

  if (!isMatch && shouldThrowError) {
    throw new CustomError({
      message: `${ReasonPhrases.UNAUTHORIZED}\n${message ?? ''}`,
      statusCode: StatusCodes.UNAUTHORIZED,
      data: null,
    });
  }

  return isMatch;
};

export default compareStrings;
