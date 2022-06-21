import { User } from 'src/db/entities/User.entity';

declare namespace Express {
  export interface Request {
    user?: User;
  }
}
