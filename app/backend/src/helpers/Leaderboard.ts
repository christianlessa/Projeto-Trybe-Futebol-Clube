import { IReturnLeaderboards, ITeamHome } from '../interfaces/Leaderboards';

export default class LeaderboardsHelpers {
  public static totalpoints(homeTeam: ITeamHome[]) {
    return homeTeam.reduce((acc, curr) => {
      if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 3;
      if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalWinsHome(homeTeam: ITeamHome[]) {
    return homeTeam.reduce((acc, curr) => {
      if (curr.homeTeamGoals > curr.awayTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalDraws(homeTeam: ITeamHome[]) {
    return homeTeam.reduce((acc, curr) => {
      if (curr.homeTeamGoals === curr.awayTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalLossesHome(homeTeam: ITeamHome[]) {
    return homeTeam.reduce((acc, curr) => {
      if (curr.homeTeamGoals < curr.awayTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalGoalsFavorHome(homeTeam: ITeamHome[]) {
    return homeTeam.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  }

  public static totalGoalsOwnHome(homeTeam: ITeamHome[]) {
    return homeTeam.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  }

  public static goalsBalanceHome(homeTeam: ITeamHome[]) {
    const goalsFavor = this.totalGoalsFavorHome(homeTeam);
    const goalsOwn = this.totalGoalsOwnHome(homeTeam);
    const arrayGoalsFavor = [];

    arrayGoalsFavor.push(goalsFavor);

    const goalsBalance = arrayGoalsFavor.map((GP) => GP - goalsOwn);

    return goalsBalance[0];
  }

  public static efficiencyHome(homeTeam: ITeamHome[]) {
    const totalPoints = this.totalpoints(homeTeam);
    const totalGames = homeTeam.length;
    const arrayPoints = [];

    arrayPoints.push(totalPoints);

    const efficiency = arrayPoints.map((points) => {
      const calc = points / (totalGames * 3);
      const result = calc * 100;
      return result;
    });

    return Number(efficiency[0].toFixed(2));
  }

  public static sortedGames(gamesForTeam: IReturnLeaderboards[]) {
    return gamesForTeam.sort((a, b) =>
      b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn);
  }
}
