import { Request, Response, NextFunction } from 'express';
import { IModelMatches } from '../interfaces/Match';

export default class MatchController {
  constructor(private matchService: IModelMatches) {}

  async getAllMatches(req: Request, res: Response, next: NextFunction) {
    try {
      const matches = await this.matchService.getAllMatches();

      return res.status(200).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async createMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

      const match = { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true };

      const matches = await this.matchService.createMatch(match);

      return res.status(201).json(matches);
    } catch (error) {
      next(error);
    }
  }
}
