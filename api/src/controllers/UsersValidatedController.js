const UsersRepository = require("../repositories/usersRepository");
const UsersValidatedServices = require("../services/UsersValidatedServices");
const usersRepository = new UsersRepository();
const usersValidatedServices = new UsersValidatedServices(usersRepository);

class UsersValidatedController {
  async index(request, response) {
    const { user } = request;

    const userValidated = await usersValidatedServices.index(user.id);

    return response.status(201).json(userValidated);
  }
}

module.exports = UsersValidatedController;
