const knex = require("../database/knex");

class MenuCategoriesRepository {
  async create({ categories, plateId }) {
    categories.map(
      async (category) =>
        await knex("menu_categories").insert({
          plate_id: plateId,
          category_id: category,
        })
    );

    return;
  }

  async deleteByPlateId(id) {
    await knex("menu_categories").where({ plate_id: id }).delete();
  }
}

module.exports = MenuCategoriesRepository;
