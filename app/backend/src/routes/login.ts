import { Router } from 'express';
import loginFactory from '../factory/login';
import validateLogin from '../midleware/validateLogin';

const router = Router();

router.post('/login', validateLogin, (req, res, next) => loginFactory().userLogin(req, res, next));

export default router;
