import { Request, Response, NextFunction } from 'express';
import HelpersHome from '../helpers/LeaderboardHome';
import service from '../service/Leaderboard';

export default class LeaderboardController {
  constructor(private leaderboardService: service) {}

  async getLeaderboardsHome(req: Request, res: Response, next: NextFunction) {
    try {
      const leaderboards = await this.leaderboardService.leaderboardsHome();

      return res.status(200).json(leaderboards);
    } catch (error) {
      next(error);
    }
  }

  async getLeaderboardsAway(req: Request, res: Response, next: NextFunction) {
    try {
      const leaderboards = await this.leaderboardService.leaderboardsAway();

      return res.status(200).json(leaderboards);
    } catch (error) {
      next(error);
    }
  }

  async getAllLeaderboards(req: Request, res: Response, next: NextFunction) {
    try {
      const home = await this.leaderboardService.leaderboardsHome();
      const away = await this.leaderboardService.leaderboardsAway();

      const leaderboards = await this.leaderboardService.leaderboards(home, away);

      const sortedLeaderboards = HelpersHome.sortedGames(leaderboards);

      return res.status(200).json(sortedLeaderboards);
    } catch (error) {
      next(error);
    }
  }
}
