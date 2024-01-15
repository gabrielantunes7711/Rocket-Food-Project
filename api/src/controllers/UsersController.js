const UsersRepository = require("../repositories/usersRepository");
const UsersServices = require("../services/UsersServices");
const usersRepository = new UsersRepository();
const usersServices = new UsersServices(usersRepository);

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    await usersServices.create({
      name,
      email,
      password,
    });

    return response.status(201).json();
  }
}

module.exports = UsersController;
