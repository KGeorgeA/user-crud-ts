import type { RequestHandler } from 'express';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    message: string;
  };
};

type RequestBody = {
  userId: number;
}

type RequestQuery = unknown;

type DeleteUserControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default DeleteUserControllerType;
