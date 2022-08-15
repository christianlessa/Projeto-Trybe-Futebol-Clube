import * as bcrypt from 'bcryptjs';
import CustomError from '../utils/customError';
import { generateToken } from '../utils/Token';
import { IUserEmail, IUserLogin } from '../interfaces/UserLogin';

export default class UserService {
  constructor(private user: IUserEmail) {}

  async userLogin(data: IUserLogin): Promise <string> {
    const userLogin = await this.user.getByEmail(data.email);

    if (!userLogin) throw new CustomError('Incorrect email or password', 401);

    const result = bcrypt.compareSync(data.password, userLogin.password);

    if (!result) throw new CustomError('Incorrect email or password', 401);

    const token = generateToken(userLogin.email, userLogin.role);

    return token;
  }
}
