import Match from '../database/models/Match';

export interface IModelMatches {
  getAllMatches(): Promise <Match[]>
}
