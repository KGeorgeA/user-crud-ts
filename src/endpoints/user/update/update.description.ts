import type { RequestHandler } from 'express';
import type User from '../../../db/entities/User.entity';

type RequestParams = {
  userId: string;
}

type ResponseBody = {
  data: {
    updatedUser: User;
  }
};

type RequestBody = Partial<Omit<User, 'id' | 'password'>>

type RequestQuery = unknown;

type UpdateControllerType = RequestHandler<RequestParams, ResponseBody, RequestBody, RequestQuery>;

export default UpdateControllerType;
