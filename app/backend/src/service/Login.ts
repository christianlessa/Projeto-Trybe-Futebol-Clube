import CustomError from '../utils/customError';
import { IUserEmail, IUserLogin } from '../interfaces/UserLogin';
import { generateToken } from '../utils/Token';

export default class UserService {
  constructor(private user: IUserEmail) {}

  async userLogin(data: IUserLogin): Promise <string> {
    const userLogin = await this.user.getByEmail(data.email);

    if (!userLogin) throw new CustomError('Incorrect email or password', 401);

    const token = generateToken(userLogin.email, userLogin.role);

    return token;
  }
}
