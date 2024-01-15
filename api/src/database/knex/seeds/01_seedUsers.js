const { hash } = require("bcryptjs");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(async function () {
      const defaultPassword = await hash("123456", 8);

      return knex("users").insert([
        {
          name: "Admin",
          email: "admin@email.com",
          password: defaultPassword,
          role: "admin",
        },
        {
          name: "User",
          email: "user@email.com",
          password: defaultPassword,
          role: "customer",
        },
      ]);
    });
};
