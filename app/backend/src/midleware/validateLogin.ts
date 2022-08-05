import * as bcrypt from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';
import User from '../database/models/User';

const validateLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(401).json({ message: 'Incorrect email or password' });

  const result = bcrypt.compareSync(password, user.password);

  if (!result) return res.status(401).json({ message: 'Incorrect email or password' });

  next();
};

export default validateLogin;
