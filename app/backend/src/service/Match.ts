import Match from '../database/models/Match';
import CustomError from '../utils/customError';
import { ICreateMatch, IModelMatches, IReturnCreated, IUpdateGoals } from '../interfaces/Match';

export default class MatchService {
  constructor(private matchModel: IModelMatches) {}

  async getAllMatches(): Promise<Match[]> {
    const matches = await this.matchModel.getAllMatches();
    return matches;
  }

  async createMatch(match: ICreateMatch): Promise <IReturnCreated> {
    const matches = await this.getAllMatches();
    const result = matches.find(
      (team) => team.homeTeam === match.homeTeam,
    );

    if (!result) throw new CustomError('There is no team with such id!', 404);

    const newMatch = await this.matchModel.createMatch(match);
    return newMatch;
  }

  async updateProgressFinish(id: number): Promise <[number, Match[]]> {
    const updated = await this.matchModel.updateProgressFinish(id);
    return updated;
  }

  async updateInProgress(goals: IUpdateGoals, id: number): Promise <[number, Match[]]> {
    const updated = await this.matchModel.updateInProgress(goals, id);
    return updated;
  }
}
