import { Request, Response, NextFunction } from 'express';
import { IModelTeams } from '../interfaces/Teams';

export default class TeamController {
  constructor(private teamService: IModelTeams) {}

  async getAllTeams(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await this.teamService.getAllTeams();

      return res.status(200).json(teams);
    } catch (error) {
      next(error);
    }
  }

  async getByIdTeam(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const teamById = await this.teamService.getByIdTeam(id);

      return res.status(200).json(teamById);
    } catch (error) {
      next(error);
    }
  }
}
