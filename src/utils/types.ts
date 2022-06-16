import type { Request, Response, NextFunction } from 'express';

export type Method =
  | 'get'
  | 'head'
  | 'post'
  | 'put'
  | 'delete'
  | 'connect'
  | 'options'
  | 'trace'
  | 'patch';

export type Handler = (req: Request, res: Response, next?: NextFunction) => unknown;

export type UserType = {
  id: number;
  firstName: string;
  secondName: string;
  age: number;
  isMale: boolean;
  email: string;
  phone: string;
  DoB: Date;
};
