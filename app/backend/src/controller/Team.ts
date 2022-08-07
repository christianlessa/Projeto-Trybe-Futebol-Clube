import { Request, Response, NextFunction } from 'express';
import { IAllTeams } from '../interfaces/Teams';

export default class TeamController {
  constructor(private teamService: IAllTeams) {}

  async getAllTeams(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.teamService.getAllTeams();

      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }
}
