import { Router } from 'express';
import MatchFactory from '../factory/match';

const router = Router();

router.get('/matches', (req, res, next) => MatchFactory().getAllMatches(req, res, next));

export default router;
