import { Request, Response, NextFunction } from 'express';
import { ILoginService } from '../interfaces/UserLogin';

export default class UserController {
  constructor(private loginService: ILoginService) {}

  async userLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.loginService.userLogin(req.body);

      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
