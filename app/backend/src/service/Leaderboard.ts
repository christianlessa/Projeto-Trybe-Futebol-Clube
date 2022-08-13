import HelpersHome from '../helpers/LeaderboardHome';
import HelpersAway from '../helpers/LeaderboardAway';
import {
  ILeaderboardLeader, ITeamMachesHome, ITeamMachesAway, IReturnLeaderboards,
} from '../interfaces/Leaderboards';

export default class LeaderboardService {
  constructor(private teamModel: ILeaderboardLeader) {}

  async leaderboardsHome(): Promise <IReturnLeaderboards[]> {
    const matches = await this.teamModel.getAllMatchesHome() as unknown as ITeamMachesHome[];

    const gamesForTeam = matches.map((match) => ({
      name: match.teamName,
      totalPoints: HelpersHome.totalpointsHome(match.teamHome),
      totalGames: match.teamHome.length,
      totalVictories: HelpersHome.totalWinsHome(match.teamHome),
      totalDraws: HelpersHome.totalDrawsHome(match.teamHome),
      totalLosses: HelpersHome.totalLossesHome(match.teamHome),
      goalsFavor: HelpersHome.totalGoalsFavorHome(match.teamHome),
      goalsOwn: HelpersHome.totalGoalsOwnHome(match.teamHome),
      goalsBalance: HelpersHome.goalsBalanceHome(match.teamHome),
      efficiency: HelpersHome.efficiencyHome(match.teamHome),
    }));

    const sortedGames = HelpersAway.sortedGames(gamesForTeam);
    return sortedGames;
  }

  async leaderboardsAway(): Promise <IReturnLeaderboards[]> {
    const matches = await this.teamModel.getAllMatchesAway() as unknown as ITeamMachesAway[];

    const gamesForTeam = matches.map((match) => ({
      name: match.teamName,
      totalPoints: HelpersAway.totalpointsAway(match.teamAway),
      totalGames: match.teamAway.length,
      totalVictories: HelpersAway.totalWinsAway(match.teamAway),
      totalDraws: HelpersAway.totalDrawsAway(match.teamAway),
      totalLosses: HelpersAway.totalLossesAway(match.teamAway),
      goalsFavor: HelpersAway.totalGoalsFavorAway(match.teamAway),
      goalsOwn: HelpersAway.totalGoalsOwnAway(match.teamAway),
      goalsBalance: HelpersAway.goalsBalanceAway(match.teamAway),
      efficiency: HelpersAway.efficiencyAway(match.teamAway),
    }));

    const sortedGames = HelpersAway.sortedGames(gamesForTeam);
    return sortedGames;
  }
}
