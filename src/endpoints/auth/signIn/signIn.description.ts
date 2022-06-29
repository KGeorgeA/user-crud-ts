import type { RequestHandler } from 'express';
import type { UserEntity } from '../../../db';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    token: {
      access: string;
      refresh: string;
    };
    user: UserEntity;
  },
}

type RequestBody = {
  email: string;
  password: string;
}

type RequestQuery = unknown;

type SignInControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default SignInControllerType;
