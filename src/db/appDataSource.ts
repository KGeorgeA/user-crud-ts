import path from 'path';
import { DataSource } from 'typeorm';
import config from '../config';

const dataSource = new DataSource({
  type: 'postgres',
  host: config.db.host,
  port: config.db.port,
  username: config.db.username,
  password: config.db.password,
  database: config.db.name,
  entities: [path.normalize(`${__dirname}/./entities/*.entity.{ts,js}`)],
  migrations: [path.normalize(`${__dirname}/./migrations/*.{ts,js}`)],
  logging: false,
  synchronize: false,
});

export default dataSource;
