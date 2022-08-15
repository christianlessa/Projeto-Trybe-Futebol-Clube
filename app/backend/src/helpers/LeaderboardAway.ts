import { IReturnLeaderboards, ITeamHome } from '../interfaces/Leaderboards';

export default class LeaderboardsHelpersAway {
  public static totalpointsAway(teamAway: ITeamHome[]) {
    return teamAway.reduce((acc, curr) => {
      if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 3;
      if (curr.awayTeamGoals === curr.homeTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalWinsAway(teamAway: ITeamHome[]) {
    return teamAway.reduce((acc, curr) => {
      if (curr.awayTeamGoals > curr.homeTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalDrawsAway(teamAway: ITeamHome[]) {
    return teamAway.reduce((acc, curr) => {
      if (curr.awayTeamGoals === curr.homeTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalLossesAway(teamAway: ITeamHome[]) {
    return teamAway.reduce((acc, curr) => {
      if (curr.awayTeamGoals < curr.homeTeamGoals) return acc + 1;

      return acc;
    }, 0);
  }

  public static totalGoalsFavorAway(teamAway: ITeamHome[]) {
    return teamAway.reduce((acc, curr) => acc + curr.awayTeamGoals, 0);
  }

  public static totalGoalsOwnAway(teamAway: ITeamHome[]) {
    return teamAway.reduce((acc, curr) => acc + curr.homeTeamGoals, 0);
  }

  public static goalsBalanceAway(teamAway: ITeamHome[]) {
    const goalsFavor = this.totalGoalsFavorAway(teamAway);
    const goalsOwn = this.totalGoalsOwnAway(teamAway);
    const arrayGoalsFavor = [];

    arrayGoalsFavor.push(goalsFavor);

    const goalsBalance = arrayGoalsFavor.map((GP) => GP - goalsOwn);

    return goalsBalance[0];
  }

  public static efficiencyAway(teamAway: ITeamHome[]) {
    const totalPoints = this.totalpointsAway(teamAway);
    const totalGames = teamAway.length;
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
