import type { RequestHandler } from 'express';

type RequestParams = {
  id: number;
}

type ResponseBody = {
  //
}

type RequestBody = {
  oldPassword: string;
  password: string;
}

type RequestQuery = {
  //
}

type ChangePasswordControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default ChangePasswordControllerType;
