import { Response, NextFunction } from 'express';
import { IUserRequest } from '../interfaces/UserLogin';
import { decodingToken } from '../utils/Token';

export default async (req: IUserRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decodedToken = decodingToken(token);
    req.user = decodedToken;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
