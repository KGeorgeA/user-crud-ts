import type { RequestHandler } from 'express';

type RequestParams = {
  //
}

type ResponseBody = {
  data: {
    token: string;
    newUser: number; // instanceof 'user'
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
