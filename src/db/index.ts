import dataSource from './appDataSource';
import { User } from './entities/User.entity';

export default {
  user: dataSource.getRepository(User),
};
