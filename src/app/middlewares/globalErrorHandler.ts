import { NextFunction, Request, Response } from 'express';
import status from 'http-status';
import config from '../config';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    status: err?.status || 500,
    message: err?.message || 'Something went wrong',
    stack: config.NODE_ENV === 'development' ? err.stack : null,
  });

  next();
};

export default globalErrorHandler;
