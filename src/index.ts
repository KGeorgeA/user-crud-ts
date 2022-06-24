import app from './app';
import dataSource from './db/appDataSource';
import config from './config';
import logger from './utils/logger';

(async () => {
  await dataSource
    .initialize()
    .catch((error) => {
      logger.error(error, 'Error ocured while Data Source initialization');
      process.exit(1);
    });

  logger.info('Data Source has been initialized!');

  app.listen(config.server.port, () => {
    logger.info(`App is listening at ${config.server.port} Port`);
  });
})();
