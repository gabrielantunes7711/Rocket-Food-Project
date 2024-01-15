const knex = require("../database/knex");

function ingredientsInArray(query) {
  const { ingredients, ...rest } = query;
  let ingredientsArray = [];

  if (ingredients) {
    ingredientsArray = ingredients.replace(/,\s+/g, ",").split(",");
  }

  const newData = {
    ...rest,
    ingredients: ingredientsArray,
  };

  return newData;
}

class MenuRepository {
  async index() {
    const menu = await knex("menu");

    return menu;
  }

  async getById(id) {
    const query = await knex("menu").where({ id }).first();

    const treatedData = ingredientsInArray(query);

    return treatedData;
  }

  async getByName(name) {
    const query = await knex("menu").where({ name }).first();

    return query;
  }

  async getColumn(column, id) {
    const query = await knex("menu").select(column).where({ id }).first();

    return query[column];
  }

  async orderByCategories() {
    const categorizedMenus = [];

    const query = await knex
      .select("categories.name as category", "menu.*")
      .from("menu_categories")
      .join("menu", "menu_categories.plate_id", "menu.id")
      .join("categories", "menu_categories.category_id", "categories.id")
      .orderBy("categories.name");

    query.forEach((row) => {
      const { category, ...menuData } = row;

      const categoryIndex = categorizedMenus.findIndex(
        (item) => item.category === category
      );

      if (categoryIndex === -1) {
        const newCategory = {
          category,
          plates: [menuData],
        };

        categorizedMenus.push(newCategory);
      } else {
        categorizedMenus[categoryIndex].plates.push(menuData);
      }
    });
    return categorizedMenus;
  }

  async create(data) {
    const [plateId] = await knex("menu").insert(data);

    return plateId;
  }

  async update(data, id) {
    const plateId = await knex("menu").where({ id }).update(data);

    return plateId;
  }

  async delete(id) {
    await knex("menu").where({ id }).delete();
  }
}

module.exports = MenuRepository;
