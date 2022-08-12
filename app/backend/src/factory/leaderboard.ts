import LeaderboardController from '../controller/Leaderboards';
import LeaderRepository from '../repository/Leaderboard';
import LeaderboardService from '../service/Leaderboard';

export default () => {
  const model = new LeaderRepository();
  const service = new LeaderboardService(model);
  const controller = new LeaderboardController(service);

  return controller;
};
