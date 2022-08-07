import TeamController from '../controller/Team';
import TeamRepository from '../repository/Team';
import TeamService from '../service/Team';

export default () => {
  const model = new TeamRepository();
  const service = new TeamService(model);
  const controller = new TeamController(service);

  return controller;
};
