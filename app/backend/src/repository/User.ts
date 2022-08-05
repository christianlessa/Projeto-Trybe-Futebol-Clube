import { IUserLogin } from '../interfaces/UserLogin';
import User from '../database/models/User';

export default class UserRepository implements IUserLogin {
  constructor(private userModel = User) {}
  email: string;
  password: string;

  async getByEmail(email: string): Promise<User | null> {
    const emailByUser = await this.userModel.findOne({ where: { email } });
    return emailByUser;
  }
}
