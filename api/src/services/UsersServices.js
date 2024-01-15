const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UsersServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create({ name, email, password }) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (!name || !email || !password) {
      throw new AppError("Informe todos os dados para o cadastro do usuário.");
    }

    if (password.length < 6) {
      throw new AppError("Aumente a força da senha");
    }

    if (checkUserExists) {
      throw new AppError("Este e-mail já está em uso.");
    }

    const hashedPassword = await hash(password, 8);

    await this.userRepository.create({ name, email, password: hashedPassword });
  }
}

module.exports = UsersServices;
