const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const authConfig = require("../configs/auth");

class SessionsServices {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async create({ email, password, response }) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("E-mail e/ou senha incorreta.", 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ role: user.role }, secret, {
      subject: String(user.id),
      expiresIn,
    });

    response.cookie("token", token, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    delete user.password;

    return user;
  }

  async delete({ response }) {
    response.cookie("token", "", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      expires: new Date(0),
    });
  }
}

module.exports = SessionsServices;
