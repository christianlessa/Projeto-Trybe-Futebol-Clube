import { Router } from 'express';
import loginFactory from '../factory/login';
import validateLogin from '../midleware/validateLogin';
import authToken from '../midleware/authorization';

const router = Router();

router.get('/login/validate', authToken);
router.post('/login', validateLogin, (req, res, next) => loginFactory().userLogin(req, res, next));

export default router;
