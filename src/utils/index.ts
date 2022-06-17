import pino from 'pino';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  timestamp: () => `,"time":"${dayjs().format('DD.MM.YYYY HH:mm:ss')}"`,
  base: {
    pid: false,
  },
});

export default logger;
