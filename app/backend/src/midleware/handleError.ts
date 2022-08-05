import { ErrorRequestHandler } from 'express';

export default class HandleError {
  errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    if (err.status) {
      return res.status(err.status).json({ message: err.message });
    }
    return res.status(500).json({ message: err.message });
  };
}
