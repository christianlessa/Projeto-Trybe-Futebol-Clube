import { IModelTeams } from '../interfaces/Teams';
import Team from '../database/models/Team';

export default class TeamService {
  constructor(private teamModel: IModelTeams) {}

  async getAllTeams(): Promise<Team[]> {
    const allTeams = await this.teamModel.getAllTeams();
    return allTeams;
  }

  async getByIdTeam(id: string): Promise<Team | null> {
    const teamById = await this.teamModel.getByIdTeam(id);
    return teamById;
  }
}
