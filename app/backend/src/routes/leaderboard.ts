import { Router } from 'express';
import LeaderboardFactory from '../factory/leaderboard';

const router = Router();

router.get(
  '/leaderboard/home',
  (req, res, next) => LeaderboardFactory().getLeaderboardsHome(req, res, next),
);

router.get(
  '/leaderboard/away',
  (req, res, next) => LeaderboardFactory().getLeaderboardsAway(req, res, next),
);

export default router;
