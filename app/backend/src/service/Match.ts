import Match from '../database/models/Match';
import { IModelMatches } from '../interfaces/Match';

export default class MatchService {
  constructor(private matchModel: IModelMatches) {}

  async getAllMatches(): Promise<Match[]> {
    const matches = await this.matchModel.getAllMatches();
    return matches;
  }
}
