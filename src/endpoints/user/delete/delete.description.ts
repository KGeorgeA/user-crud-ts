import type { RequestHandler } from 'express';

type RequestParams = Record<string, never>;

type ResponseBody = {
  data: {
    message: string;
  };
};

type RequestBody = {
  userId: number;
}

type RequestQuery = Record<string, never>;

type DeleteUserControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default DeleteUserControllerType;
