const SessionsServices = require("../services/SessionsServices");
const UsersRepository = require("../repositories/usersRepository");
const usersRepository = new UsersRepository();
const sessionsServices = new SessionsServices(usersRepository);

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await sessionsServices.create({ email, password, response });

    return response.status(201).json({ user });
  }

  async delete(request, response) {
    await sessionsServices.delete({ response });

    return response.status(201).end();
  }
}

module.exports = SessionsController;
