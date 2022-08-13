import { IReturnLeaderboards } from '../interfaces/Leaderboards';
import Match from '../database/models/Match';
import Team from '../database/models/Team';

export default class LeaderboardRepository {
  constructor(private teamModel = Team) {}

  async getAllMatchesHome(): Promise <IReturnLeaderboards[] | Team[]> {
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

  async getAllMatchesAway(): Promise <IReturnLeaderboards[] | Team[]> {
    const matchesOfTeams = await this.teamModel.findAll({
      include: [{
        model: Match,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
        where: { inProgress: false },
      }],
    });
    return matchesOfTeams;
  }
}
