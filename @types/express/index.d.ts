import User from 'src/db/entities/User.entity';

declare module 'express-serve-static-core' {
  interface Request {
    user?: User;
  }
}
