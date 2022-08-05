import { Request, Response, NextFunction } from 'express';
import { ILoginService } from '../interfaces/UserLogin';
import { generateToken } from '../utils/Token';

export default class UserController {
  constructor(private loginService: ILoginService) {}

  userLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      this.loginService.userLogin(req.body);

      const token = generateToken(email);

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
