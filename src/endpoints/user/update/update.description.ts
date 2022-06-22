import type { RequestHandler } from 'express';

type RequestParams = {
  userId: number;
}

type ResponseBody = unknown;

type RequestBody = {
  firstName?: string;
  secondName?: string;
  email?: string;
  phone?: string;
}

type RequestQuery = unknown;

type UpdateControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>;

export default UpdateControllerType;
