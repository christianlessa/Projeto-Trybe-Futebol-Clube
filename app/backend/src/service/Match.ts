import Match from '../database/models/Match';
import { ICreateMatch, IModelMatches, IReturnCreated } from '../interfaces/Match';

export default class MatchService {
  constructor(private matchModel: IModelMatches) {}

  async getAllMatches(): Promise<Match[]> {
    const matches = await this.matchModel.getAllMatches();
    return matches;
  }

  async createMatch(match: ICreateMatch): Promise <IReturnCreated> {
    const newMatch = await this.matchModel.createMatch(match);
    return newMatch;
  }

  async updateProgressFinish(id: number): Promise <[number, Match[]]> {
    const updated = await this.matchModel.updateProgressFinish(id);
    return updated;
  }
}
