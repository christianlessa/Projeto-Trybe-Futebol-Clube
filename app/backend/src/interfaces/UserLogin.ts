import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../database/models/User';

export type LoginResult = {
  id?: number;
  email: string;
  role: string;
};

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginService {
  userLogin(data: IUserLogin): Promise<LoginResult>
}

export interface IUserEmail {
  getByEmail(email: string): Promise<User | null>
}

export interface IUserRequest extends Request {
  user: jwt.JwtPayload;
}
