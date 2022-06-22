import { pbkdf2Sync } from 'crypto';
import config from '../config';

const hashString = (password: string) => {
  return pbkdf2Sync(
    password.trim(),
    config.secrets.hash.salt,
    config.secrets.hash.iterations,
    config.secrets.hash.keylen,
    config.secrets.hash.digest,
  ).toString('hex');
};

export default hashString;
