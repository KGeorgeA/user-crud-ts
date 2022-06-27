import type { RequestHandler } from 'express';
import type User from 'src/db/entities/User.entity';
import type { FindOptionsWhere, FindOptionsOrder } from 'typeorm';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    list: User[];
    total: number;
  }
}

type RequestBody = unknown;

type RequestQuery = {
  page: number;
  perPage: number;
  sort?: FindOptionsOrder<User>;
  search?: string;
  sortBy?: FindOptionsWhere<User> | FindOptionsWhere<User>[]
}

type GetUsersListControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetUsersListControllerType;
