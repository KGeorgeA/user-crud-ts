import type { RequestHandler } from 'express';
import { User } from '../../../db/entities/User.entity';

type RequestParams = {
  //
}

type ResponseBody = {
  data: {
    token: string;
    newUser: User;
  }
}

type RequestBody = {
  email: string;
  password: string;
}

type RequestQuery = {
  //
}

type SignUpControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default SignUpControllerType;
