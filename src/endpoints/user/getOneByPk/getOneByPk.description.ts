import type { RequestHandler } from 'express';

type RequestParams = {
  userId: string;
}

type ResponseBody = unknown;

type RequestBody = unknown;

type RequestQuery = unknown;

type GetOneByPkControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetOneByPkControllerType;
