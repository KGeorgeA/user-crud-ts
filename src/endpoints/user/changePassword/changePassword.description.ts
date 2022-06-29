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

type RequestBody = {
  oldPassword: string;
  password: string;
}

type RequestQuery = Record<string, never>;

type ChangePasswordControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default ChangePasswordControllerType;
