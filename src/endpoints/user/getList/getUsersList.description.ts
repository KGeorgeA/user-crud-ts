import type { RequestHandler } from 'express';
import { UserEntity } from '../../../db';
import { Directions } from '../../../utils/types';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    list: UserEntity[];
    total: number;
  }
}

type RequestBody = unknown;

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
