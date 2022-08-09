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

      if (homeTeam === awayTeam) {
        return res.status(401).json({
          message: 'It is not possible to create a match with two equal teams',
        });
      }

      const matches = await this.matchService.createMatch(match);

      return res.status(201).json(matches);
    } catch (error) {
      next(error);
    }
  }

  async updateProgressFinish(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.matchService.updateProgressFinish(Number(id));

      return res.status(200).json({ message: 'Finished' });
    } catch (error) {
      next(error);
    }
  }
}
