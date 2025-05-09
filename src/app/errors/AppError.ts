class AppError extends Error {
  public status: number;

  constructor(statusCode: number, message: string, stack = '') {
    super(message);
    this.status = statusCode;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export default AppError;
