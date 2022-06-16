import { StatusCodes } from 'http-status-codes';
import dayjs from 'dayjs';
import logger from '../logger';
import 'dayjs/locale/ru';

const getFileName = (file = '', extension = 'ts') => {
  return file.match(new RegExp(`[^/]*.${extension}$`, 'i'))[0];
};

export default (err, req, res, next) => {
  const formattedError = {
    functionName: err.functionName,
    absolutePath: err.fileName,
    fileName: getFileName(err.fileName),
    stack: err.stack,
    error: err,
  };

  const timeStamp = dayjs(new Date(), 'DD.MM.YYYY HH:mm:ss', 'ru');

  logger.error('------------------ Error START ------------------');
  logger.info(`${timeStamp}`, 'Time stamp: ');
  logger.info(formattedError.absolutePath, 'Absolute file path: ');
  logger.info(formattedError.fileName, 'File name: ');
  logger.info(formattedError.functionName, 'Function name: ');
  // logger.info(formattedError.stack, 'Stack: ');
  logger.info(err.message, 'Message: ');
  logger.error('------------------ Error END ------------------');

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Internal server error');
};
