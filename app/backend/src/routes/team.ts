import { Router } from 'express';
import teamFactory from '../factory/team';

const router = Router();

router.get('/teams', (req, res, next) => teamFactory().getAllTeams(req, res, next));

export default router;
