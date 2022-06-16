import log from './logger';
import config from './config';
import app from './app';

const PORT = config.server.port;

app.listen(PORT, () => {
  log.info(`App is listening at http://localhost:${PORT}`);
});
