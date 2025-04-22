import { Response } from 'express';

type TResponce<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T | null | undefined;
};

const sendResponse = <T>(res: Response, data: TResponce<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
