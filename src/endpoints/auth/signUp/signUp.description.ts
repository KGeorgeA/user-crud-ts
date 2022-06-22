import type { RequestHandler } from 'express';
import { User } from '../../../db/entities/User.entity';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    token: {
      access: string;
      refresh: string;
    };
    newUser: User;
  }
}

export type RequestBody = {
  email: string;
  password: string;
}

type RequestQuery = unknown;

type SignUpControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default SignUpControllerType;
