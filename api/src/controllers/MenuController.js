const MenuCategoriesRepository = require("../repositories/MenuCategoriesRepository");
const MenuRepository = require("../repositories/menuRepository");
const CategoriesRepository = require("../repositories/CategoriesRepository");
const MenuServices = require("../services/MenuServices");
const menuRepository = new MenuRepository();
const menuCategoriesRepository = new MenuCategoriesRepository();
const categoriesRepository = new CategoriesRepository();
const menuServices = new MenuServices(
  menuRepository,
  menuCategoriesRepository,
  categoriesRepository
);

class MenuController {
  async index(request, response) {
    const isCategorized = request.originalUrl.includes("byCategories");

    if (isCategorized) {
      const menu = await menuServices.orderByCategories();
      return response.json(menu).status(201);
    } else {
      const menu = await menuServices.index();
      return response.json(menu).status(201);
    }
  }

  async show(request, response) {
    const { id } = request.params;

    const menu = await menuServices.show(id);

    return response.json(menu).status(201);
  }

  async create(request, response) {
    const { name, price, ingredients, description, categories } = request.body;
    const imageFilename = request.file ? request.file.filename : null;

    await menuServices.create({
      name,
      price,
      ingredients,
      description,
      categories,
      imageFilename,
    });

    return response.json();
  }

  async update(request, response) {
    const { name, price, ingredients, description, categories, image } =
      request.body;
    const imageFilename = request.file ? request.file.filename : image;
    const { id } = request.params;

    await menuServices.update({
      id,
      name,
      price,
      ingredients,
      description,
      categories,
      imageFilename,
    });

    return response.json();
  }

  async delete(request, response) {
    const { id } = request.params;

    await menuServices.delete(id);

    return response.json();
  }
}

module.exports = MenuController;
