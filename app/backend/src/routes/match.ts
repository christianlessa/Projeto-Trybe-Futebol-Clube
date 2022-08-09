import { Router } from 'express';
import MatchFactory from '../factory/match';
import authToken from '../midleware/authorization';

const router = Router();

router.get('/matches', (req, res, next) => MatchFactory().getAllMatches(req, res, next));

router.post('/matches', authToken, (req, res, next) => MatchFactory().createMatch(req, res, next));

router.patch(
  '/matches/:id/finish',
  (req, res, next) => MatchFactory().updateProgressFinish(req, res, next),
);

export default router;
