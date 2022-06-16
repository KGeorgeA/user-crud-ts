import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
  timestamp: () => `,"time":"${new Date(Date.now()).toLocaleString()}"`,
  base: {
    pid: false,
  },
});

export default logger;
