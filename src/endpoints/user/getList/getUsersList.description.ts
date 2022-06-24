import type { RequestHandler } from 'express';
import type { User } from 'src/db/entities/User.entity';
import type { FindOptionsWhere, FindOptionsOrder } from 'typeorm';

type RequestParams = unknown;

type ResponseBody = {
  data: {
    list: User[];
    total: number;
  }
}

type RequestBody = {
  page: number;
  perPage: number;
  sortBy?: FindOptionsOrder<User>;
  search?: string;
  where?: FindOptionsWhere<User> | FindOptionsWhere<User>[]
}

// TO-DO: type it
type RequestQuery = {
  [key: string]: string;
}

type GetUsersListControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetUsersListControllerType;
