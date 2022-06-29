import type { RequestHandler } from 'express';
import type { UserEntity } from '../../../db';

type RequestParams = {
  userId: string;
}

type ResponseBody = {
  data: {
    user: UserEntity;
  }
};

type RequestBody = Record<string, never>;

type RequestQuery = Record<string, never>;

type GetOneByPkControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetOneByPkControllerType;
