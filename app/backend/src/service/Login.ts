import CustomError from '../utils/customError';
import { IUserEmail, IUserLogin, LoginResult } from '../interfaces/UserLogin';

export default class UserService {
  constructor(private user: IUserEmail) {}

  async userLogin(data: IUserLogin): Promise <LoginResult> {
    const userLogin = await this.user.getByEmail(data.email);

    if (!userLogin) throw new CustomError('Incorrect email or password', 401);

    return {
      id: userLogin.id,
      email: userLogin.email,
      role: userLogin.role,
    };
  }
}
