import { Request, Response, NextFunction } from 'express';
import { decodingToken } from '../utils/Token';

export default async (req: Request, res: Response, _next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const decodedToken = decodingToken(token);
    req.headers.user = decodedToken.role;

    return res.status(200).json({ role: decodedToken.role });
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};
