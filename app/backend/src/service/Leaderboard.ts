import LeaderboardsHelpers from '../helpers/Leaderboard';
import { ILeaderboard, ITeamMaches, IReturnLeaderboards } from '../interfaces/Leaderboards';

export default class LeaderboardService {
  constructor(private teamModel: ILeaderboard) {}

  async leaderboardsHome(): Promise <IReturnLeaderboards[]> {
    const matches = await this.teamModel.getAllMatchesLeader() as unknown as ITeamMaches[];

    const gamesForTeam = matches.map((match) => ({
      name: match.teamName,
      totalPoints: LeaderboardsHelpers.totalpoints(match.teamHome),
      totalGames: match.teamHome.length,
      totalVictories: LeaderboardsHelpers.totalWinsHome(match.teamHome),
      totalDraws: LeaderboardsHelpers.totalDraws(match.teamHome),
      totalLosses: LeaderboardsHelpers.totalLossesHome(match.teamHome),
      goalsFavor: LeaderboardsHelpers.totalGoalsFavorHome(match.teamHome),
      goalsOwn: LeaderboardsHelpers.totalGoalsOwnHome(match.teamHome),
      goalsBalance: LeaderboardsHelpers.goalsBalanceHome(match.teamHome),
      efficiency: LeaderboardsHelpers.efficiencyHome(match.teamHome),
    }));

    const sortedGames = LeaderboardsHelpers.sortedGames(gamesForTeam);
    return sortedGames;
  }
}
