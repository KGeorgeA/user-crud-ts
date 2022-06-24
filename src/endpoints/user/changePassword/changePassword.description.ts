import type { RequestHandler } from 'express';

type RequestParams = {
  userId: string;
}

type ResponseBody = unknown;

type RequestBody = {
  oldPassword: string;
  password: string;
}

type RequestQuery = unknown;

type ChangePasswordControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default ChangePasswordControllerType;
