const AppError = require("../utils/AppError");

class UsersValidatedServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async index(id) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("Unauthorized", 401);
    }

    return user;
  }
}

module.exports = UsersValidatedServices;
