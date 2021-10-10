export class ErrorHandler extends Error {
  constructor(statusCode, message, isOperational = true) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

export const handleError = (err, res) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};