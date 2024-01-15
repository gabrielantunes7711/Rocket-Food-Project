const knex = require("../database/knex");

class CategoriesRepository {
  async index() {
    const categories = await knex("categories");

    return categories;
  }

  async getByIds(ids) {
    const categories = await knex("categories").whereIn("id", ids);

    return categories;
  }
}

module.exports = CategoriesRepository;
