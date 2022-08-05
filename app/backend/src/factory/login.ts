import UserController from '../controller/Login';
import UserRepository from '../repository/User';
import UserService from '../service/Login';

export default () => {
  const model = new UserRepository();
  const service = new UserService(model);
  const controller = new UserController(service);

  return controller;
};
