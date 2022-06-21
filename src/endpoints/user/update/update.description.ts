import type { RequestHandler } from 'express';

type RequestParams = {
  id: number;
}

type ResponseBody = {
  //
}

type RequestBody = {
  firstName?: string;
  secondName?: string;
  email?: string;
  phone?: string;
}

type RequestQuery = {
  //
}

type UpdateControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>;

export default UpdateControllerType;
