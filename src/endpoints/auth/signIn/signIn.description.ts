import type { RequestHandler } from 'express';

type RequestParams = {
  //
}

type ResponseBody = {
  data: {
    token: string;
    user: number; // instanceof 'user'
  }
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
