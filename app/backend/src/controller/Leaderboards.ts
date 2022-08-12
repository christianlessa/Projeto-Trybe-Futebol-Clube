import { Request, Response, NextFunction } from 'express';
import service from '../service/Leaderboard';

export default class LeaderboardController {
  constructor(private leaderboardService: service) {}

  async getLeaderboards(req: Request, res: Response, next: NextFunction) {
    try {
      const leaderboards = await this.leaderboardService.leaderboardsHome();

      return res.status(200).json(leaderboards);
    } catch (error) {
      next(error);
    }
  }
}
