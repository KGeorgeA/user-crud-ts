import log from './utils/logger';
import config from './config';
import app from './app';

const PORT = config.server.port;

// connection to database

app.listen(PORT, () => {
  log.info(`App is listening at http://localhost:${PORT}`);
});
