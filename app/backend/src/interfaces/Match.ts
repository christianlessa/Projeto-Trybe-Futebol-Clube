import Match from '../database/models/Match';

export interface ICreateMatch {
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IReturnCreated {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IModelMatches {
  getAllMatches(): Promise <Match[]>
  createMatch(match: ICreateMatch): Promise <IReturnCreated>
}
