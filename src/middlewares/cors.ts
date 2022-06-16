import cors from 'cors';
import config from '../config';

export default cors({
  origin: `${config.app.url}:${config.app.port}`,
  credentials: true,
});
