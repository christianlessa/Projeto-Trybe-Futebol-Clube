import Team from '../database/models/Team';

export interface IAllTeams {
  getAllTeams(): Promise <Team[]>
}
