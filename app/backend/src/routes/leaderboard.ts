import { Router } from 'express';
import LeaderboardFactory from '../factory/leaderboard';

const router = Router();

router.get(
  '/leaderboard/home',
  (req, res, next) => LeaderboardFactory().getLeaderboards(req, res, next),
);

export default router;
