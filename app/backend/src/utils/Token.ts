import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

dotenv.config();

const secret: jwt.Secret = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

export const generateToken = (email: string): string => {
  const token = jwt.sign({ email }, secret, jwtConfig);
  return token;
};

export const decodingToken = (token: string): jwt.JwtPayload => {
  const decodedToken = jwt.verify(token, secret);

  return decodedToken as jwt.JwtPayload;
};
