import Match from '../database/models/Match';
import Team from '../database/models/Team';

export default class MatchRepository {
  constructor(private matchModel = Match) {}

  async getAllMatches(): Promise <Match[]> {
    const matches = await this.matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Team, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return matches as Match[];
  }
}
