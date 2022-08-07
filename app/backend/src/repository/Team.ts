import Team from '../database/models/Team';

export default class TeamRepository {
  constructor(private teamModel = Team) {}

  async getAllTeams(): Promise <Team[]> {
    const teams = await this.teamModel.findAll();
    return teams;
  }
}
