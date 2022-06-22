import type { RequestHandler } from 'express';
import type { User } from 'src/db/entities/User.entity';

type RequestParams = unknown;

type ResponseBody = {
  list: User[];
  total: number;
}

type RequestBody = {
  page: number;
  perPage: number;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
  search: string;
  isMale: boolean;
  age: number[];
}

// TO-DO: type it
type RequestQuery = {
  [key: string]: string;
}

type GetUsersListControllerType =
  RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>

export default GetUsersListControllerType;
