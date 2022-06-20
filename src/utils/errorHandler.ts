import type { ErrorRequestHandler } from 'express';

const testiruemHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(200).json({ });
};

export default testiruemHandler;
