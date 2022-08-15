import HelpersHome from '../helpers/LeaderboardHome';
import HelpersAway from '../helpers/LeaderboardAway';
import {
  ILeaderboardLeader, ITeamMachesHome, ITeamMachesAway, IReturnLeaderboards,
} from '../interfaces/Leaderboards';

export default class LeaderboardService {
  private getLeader: IReturnLeaderboards[];
  constructor(private teamModel: ILeaderboardLeader) { }

  async leaderboardsHome(): Promise<IReturnLeaderboards[]> {
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

  async leaderboardsAway(): Promise<IReturnLeaderboards[]> {
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

  async leaderboards(home: IReturnLeaderboards[], away: IReturnLeaderboards[]) {
    this.getLeader = home.map((leaderboard) => away.reduce((acc, curr) => {
      if (leaderboard.name === curr.name) {
        acc.name = leaderboard.name;
        acc.totalPoints = leaderboard.totalPoints + curr.totalPoints;
        acc.totalGames = leaderboard.totalGames + curr.totalGames;
        acc.totalVictories = leaderboard.totalVictories + curr.totalVictories;
        acc.totalDraws = leaderboard.totalDraws + curr.totalDraws;
        acc.totalLosses = leaderboard.totalLosses + curr.totalLosses;
        acc.goalsFavor = leaderboard.goalsFavor + curr.goalsFavor;
        acc.goalsOwn = leaderboard.goalsOwn + curr.goalsOwn;
        acc.goalsBalance = leaderboard.goalsBalance + curr.goalsBalance;
        acc.efficiency = Number((((leaderboard.totalPoints + curr.totalPoints)
          / ((leaderboard.totalGames + curr.totalGames) * 3)) * 100).toFixed(2));
      }
      return acc;
    }, {} as IReturnLeaderboards));
    return HelpersHome.sortedGames(this.getLeader);
  }
}
