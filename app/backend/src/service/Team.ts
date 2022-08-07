import { IAllTeams } from '../interfaces/Teams';
import Team from '../database/models/Team';

export default class TeamService {
  constructor(private teamModel: IAllTeams) {}

  async getAllTeams(): Promise<Team[]> {
    const allTeams = await this.teamModel.getAllTeams();

    return allTeams;
  }
}
