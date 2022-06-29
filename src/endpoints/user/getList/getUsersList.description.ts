import type { RequestHandler } from 'express';
import { UserEntity } from '../../../db';
import { Directions } from '../../../utils/types';

type RequestParams = Record<string, never>;

type ResponseBody = {
  data: {
    list: Omit<UserEntity, 'password'>[];
    total: number;
  }
}

type RequestBody = Record<string, never>;

type RequestQuery = {
  page: string;
  perPage: string;
  roles?: 'admin' | 'user';
  searchString?: string;
  sort?: keyof UserEntity;
  direction?: Directions;
}

type GetUsersListControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetUsersListControllerType;
