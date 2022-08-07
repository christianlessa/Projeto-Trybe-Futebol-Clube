import Team from '../database/models/Team';

export interface IModelTeams {
  getAllTeams(): Promise <Team[]>
  getByIdTeam(id: string): Promise <Team | null>
}
