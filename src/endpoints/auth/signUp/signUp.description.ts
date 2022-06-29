import type { RequestHandler } from 'express';
import type { UserEntity } from '../../../db';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    token: {
      access: string;
      refresh: string;
    };
    newUser: UserEntity;
  },
}

export type RequestBody = {
  email: string;
  password: string;
}

type RequestQuery = unknown;

type SignUpControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default SignUpControllerType;
