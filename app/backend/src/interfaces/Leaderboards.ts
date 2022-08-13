import Team from '../database/models/Team';

export interface ITeamMachesHome {
  id: number;
  teamName: string;
  teamHome: [{
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: boolean;
  }];
}

export interface ITeamMachesAway {
  id: number;
  teamName: string;
  teamAway: [{
    homeTeam: number;
    homeTeamGoals: number;
    awayTeam: number;
    awayTeamGoals: number;
    inProgress: boolean;
  }];
}

export interface ITeamHome {
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IReturnLeaderboards {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export interface IReturnLeaderboards2 {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
}

export interface ILeaderboardLeader {
  getAllMatchesHome(): Promise <IReturnLeaderboards[] | Team[]>
  getAllMatchesAway(): Promise <IReturnLeaderboards[] | Team[]>
}
