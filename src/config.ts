import dotenv from 'dotenv';
import path from 'path';

const parsedLocalEnv = dotenv.config({ path: path.normalize(`${__dirname}/../.env`) }).parsed;
const parsedDefaultEnv = dotenv.config({ path: path.normalize(`${__dirname}/../default.env`) }).parsed;

type EnvNames =
  | 'PORT'
  | 'HOST'
  | 'APP__URL'
  | 'APP_PORT'
  | 'DB__PORT'
  | 'DB__DIALECT'
  | 'DB__HOST'
  | 'DB__USERNAME'
  | 'DB__PASSWORD'
  | 'DB__NAME'
  | 'ACCESS_TOKEN_PRIVATE_KEY'
  | 'ACCESS_TOKEN_PRIVATE_KEY_EXPIRES_IN'
  | 'REFRESH_TOKEN_PRIVATE_KEY'
  | 'REFRESH_TOKEN_PRIVATE_KEY_EXPIRES_IN';

type ParsedEnvType = {
  [key in EnvNames]: string;
};

const parsedEnv = {
  ...parsedDefaultEnv,
  ...parsedLocalEnv,
} as ParsedEnvType;

const config = {
  app: {
    url: parsedEnv.APP__URL,
    port: +parsedEnv.APP_PORT,
  },
  server: {
    port: +parsedEnv.PORT,
  },
  db: {
    port: +parsedEnv.DB__PORT,
    dialect: parsedEnv.DB__DIALECT,
    host: parsedEnv.DB__HOST,
    username: parsedEnv.DB__USERNAME,
    password: parsedEnv.DB__PASSWORD,
    name: parsedEnv.DB__NAME,
  },
  secrets: {
    accessTokenKey: {
      key: parsedEnv.ACCESS_TOKEN_PRIVATE_KEY,
      expiresIn: parsedEnv.ACCESS_TOKEN_PRIVATE_KEY_EXPIRES_IN,
    },
    refreshTokenKey: {
      key: parsedEnv.REFRESH_TOKEN_PRIVATE_KEY,
      expiresIn: parsedEnv.REFRESH_TOKEN_PRIVATE_KEY_EXPIRES_IN,
    },
  },
};

export default config;
