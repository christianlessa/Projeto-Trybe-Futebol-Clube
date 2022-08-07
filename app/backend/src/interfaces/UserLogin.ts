import User from '../database/models/User';

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginService {
  userLogin(data: IUserLogin): Promise<string>
}

export interface IUserEmail {
  getByEmail(email: string): Promise<User | null>
}
