import type { RequestHandler } from 'express';

type RequestParams = {
  id: number;
}

type ResponseBody = {
  //
}

type RequestBody = {
  //
}

type RequestQuery = {
  userId: string;
}

type GetOneByPkControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetOneByPkControllerType;
