import MatchController from '../controller/Match';
import MatchRepository from '../repository/Match';
import MatchService from '../service/Match';

export default () => {
  const model = new MatchRepository();
  const service = new MatchService(model);
  const controller = new MatchController(service);

  return controller;
};
