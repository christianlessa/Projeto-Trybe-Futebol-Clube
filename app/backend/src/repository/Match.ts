import { ICreateMatch, IReturnCreated, IUpdateGoals } from '../interfaces/Match';
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

  async createMatch(match: ICreateMatch): Promise<IReturnCreated> {
    const newMatch = await this.matchModel.create(match);
    return newMatch as IReturnCreated;
  }

  async updateProgressFinish(id: number): Promise<[number, Match[]]> {
    const updated = await this.matchModel.update(
      { inProgress: false },
      { where: { id } },
    );

    return updated;
  }

  async updateInProgress(goals: IUpdateGoals, id: number): Promise <[number, Match[]]> {
    const updated = await this.matchModel.update(
      {
        homeTeamGoals: goals.homeTeamGoals,
        awayTeamGoals: goals.awayTeamGoals,
      },
      {
        where: { id },
      },
    );

    return updated;
  }
}
