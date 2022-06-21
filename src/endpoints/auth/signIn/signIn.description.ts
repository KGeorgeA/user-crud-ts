import type { RequestHandler } from 'express';
import { User } from 'src/db/entities/User.entity';

type RequestParams = {
  //
}

type ResponseBody = {
  data: {
    token: {
      access: string;
      refresh: string;
    };
    user: User;
  },
}

type RequestBody = {
  email: string;
  password: string;
}

type RequestQuery = {
  //
}

type SignInControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default SignInControllerType;
