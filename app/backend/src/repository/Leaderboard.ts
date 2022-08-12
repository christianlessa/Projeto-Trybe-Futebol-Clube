import { IReturnLeaderboards } from '../interfaces/Leaderboards';
import Match from '../database/models/Match';
import Team from '../database/models/Team';

export default class LeaderboardRepository {
  constructor(private teamModel = Team) {}

  async getAllMatchesLeader(): Promise <IReturnLeaderboards[] | Team[]> {
    const matchesOfTeams = await this.teamModel.findAll({
      include: [{
        model: Match,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
        where: { inProgress: false },
      }],
    });
    return matchesOfTeams;
  }
}
