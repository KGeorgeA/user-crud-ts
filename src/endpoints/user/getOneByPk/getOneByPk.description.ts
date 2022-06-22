import type { RequestHandler } from 'express';

type RequestParams = {
  userId: number;
}

type ResponseBody = unknown;

type RequestBody = unknown;

type RequestQuery = {
  userId: string;
}

type GetOneByPkControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetOneByPkControllerType;
