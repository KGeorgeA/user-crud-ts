import app from './app';
import dataSource from './db/appDataSource';
import config from './config';
import logger from './utils/logger';

const PORT = config.server.port;

dataSource
  .initialize()
  .then(() => {
    logger.info('Data Source has been initialized!');
  })
  .catch((error) => {
    logger.error(error, 'Error ocured while Data Source initialization');
  });

app.listen(PORT, () => {
  logger.info(`App is listening at http://localhost:${PORT}`);
});
